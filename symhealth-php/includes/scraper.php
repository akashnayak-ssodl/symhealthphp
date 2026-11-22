<?php
declare(strict_types=1);
require_once __DIR__ . '/config.php';

/** Downloads a page (or returns the cached copy). Falls back to an old cache if the source is down. */
function fetch_remote(string $url, string $key, bool $force = false): ?string
{
    $file = CACHE_DIR . '/' . preg_replace('/[^a-z0-9_-]/i', '_', $key) . '.html';
    if (!$force && is_file($file) && time() - filemtime($file) < CACHE_TTL) {
        return file_get_contents($file) ?: null;
    }

    $html = null;
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        $options = [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_MAXREDIRS      => 5,
            CURLOPT_TIMEOUT        => 20,
            CURLOPT_ENCODING       => '',
            CURLOPT_USERAGENT      => 'Mozilla/5.0 (compatible; SymhealthSite/1.0)',
        ];
        if (PHP_OS_FAMILY === 'Windows' && defined('CURLSSLOPT_NATIVE_CA')) {
            $options[CURLOPT_SSL_OPTIONS] = CURLSSLOPT_NATIVE_CA;
        }
        curl_setopt_array($ch, $options);
        $r    = curl_exec($ch);
        $code = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
        curl_close($ch);
        if (is_string($r) && $code === 200 && $r !== '') $html = $r;
    } elseif (ini_get('allow_url_fopen')) {
        $ctx = stream_context_create(['http' => ['timeout' => 20, 'header' => "User-Agent: SymhealthSite/1.0\r\n"]]);
        $r = @file_get_contents($url, false, $ctx);
        if (is_string($r) && $r !== '') $html = $r;
    }

    if ($html !== null) {
        if (!is_dir(CACHE_DIR)) @mkdir(CACHE_DIR, 0775, true);
        @file_put_contents($file, $html);
        return $html;
    }
    return is_file($file) ? (file_get_contents($file) ?: null) : null;
}

function resolve_url(string $u): string
{
    $u = trim($u);
    if ($u === '' || $u[0] === '#' || preg_match('~^(https?:|data:|mailto:|tel:|javascript:)~i', $u)) return $u;
    if (str_starts_with($u, '//')) return 'https:' . $u;
    if ($u[0] === '/') return rtrim(SOURCE_BASE, '/') . $u;
    return SOURCE_BASE . preg_replace('~^(\./|\.\./)+~', '', $u);
}

/** Old-site page links become links to the matching local page. */
function local_link(string $abs): string
{
    $p = parse_url($abs);
    if (($p['host'] ?? '') !== 'symhealth.siu.edu.in') return $abs;
    $slug = strtolower(basename($p['path'] ?? '', '.php'));
    if ($slug === '' || $slug === 'index') return 'index.php';
    return isset(pages()[$slug]) ? $slug . '.php' : $abs;
}

function text_of(DOMNode $n): string { return trim(preg_replace('/\s+/u', ' ', $n->textContent)); }

/** Removes the smallest block whose text contains all needles and is shorter than $max characters. */
function remove_block(DOMXPath $xp, DOMNode $root, array $needles, int $max): void
{
    for ($i = 0; $i < 3; $i++) {
        $best = null; $bestLen = PHP_INT_MAX;
        foreach ($xp->query('.//div|.//section|.//ul|.//table', $root) as $n) {
            $t = text_of($n); $len = mb_strlen($t);
            if ($len === 0 || $len > $max || $len >= $bestLen) continue;
            foreach ($needles as $needle) if (stripos($t, $needle) === false) continue 2;
            $best = $n; $bestLen = $len;
        }
        if (!$best) return;
        $best->parentNode?->removeChild($best);
    }
}

/** Returns the clean, restyle-able content HTML of a source page. */
function extract_content(string $html, ?string $xpath = null): string
{
    libxml_use_internal_errors(true);
    $dom = new DOMDocument();
    $dom->loadHTML('<?xml encoding="utf-8"?>' . $html, LIBXML_NOWARNING | LIBXML_NOERROR);
    libxml_clear_errors();
    $xp = new DOMXPath($dom);

    // 1. remove scripts, old navigation, footers and other page chrome
    $junk = ['//script', '//style', '//noscript', '//link', '//meta', '//nav', '//header', '//footer', '//button'];
    foreach (['navbar', 'footer', 'preloader', 'topbar', 'breadcrumb', 'scroll-top', 'back-to-top', 'cookie', 'social-icon'] as $w) {
        $junk[] = "//*[contains(translate(@class,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'$w')]";
        $junk[] = "//*[contains(translate(@id,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'$w')]";
    }
    foreach ($xp->query(implode('|', $junk)) as $n) $n->parentNode?->removeChild($n);

    // 2. pick the content container
    $root = null;
    foreach (array_filter([$xpath, '//main', '//*[@id="content"]', '//*[@id="main"]', '//div[contains(@class,"main-content")]']) as $q) {
        $r = $xp->query($q);
        if ($r && $r->length) { $root = $r->item(0); break; }
    }
    $root ??= $dom->getElementsByTagName('body')->item(0);
    if (!$root) return '';

    // 3. drop the old top banner and old contact/footer blocks (the new template has its own)
    remove_block($xp, $root, ['National Conference', 'Venue', 'Lavale'], 600);
    remove_block($xp, $root, ['Toggle navigation'], 6000);
    remove_block($xp, $root, ['Crafted by'], 1800);
    remove_block($xp, $root, ['QUICK LINKS'], 1800);

    // 4. safe iframes only (YouTube, Vimeo, Google Maps)
    foreach ($xp->query('.//iframe', $root) as $f) {
        $src = resolve_url($f->getAttribute('src'));
        if (!preg_match('~^https://(www\.)?(youtube\.com|youtube-nocookie\.com|player\.vimeo\.com|google\.com/maps|maps\.google\.com)~i', $src)) {
            $f->parentNode?->removeChild($f); continue;
        }
        $f->setAttribute('src', $src); $f->setAttribute('loading', 'lazy');
        $f->removeAttribute('width'); $f->removeAttribute('height'); $f->setAttribute('class', 'embed');
    }

    // 5. clean attributes and make every URL absolute / local
    foreach ($xp->query('.//*', $root) as $el) {
        foreach (iterator_to_array($el->attributes) as $a) {
            if (str_starts_with(strtolower($a->name), 'on')) $el->removeAttribute($a->name);
        }
        if ($el->nodeName === 'img') {
            $lazy = $el->getAttribute('data-src') ?: $el->getAttribute('data-lazy-src');
            if ($lazy !== '') $el->setAttribute('src', $lazy);
            foreach (['width', 'height', 'style', 'srcset', 'data-src', 'data-lazy-src'] as $x) $el->removeAttribute($x);
            $el->setAttribute('src', resolve_url($el->getAttribute('src')));
            $el->setAttribute('loading', 'lazy');
            if (!$el->hasAttribute('alt')) $el->setAttribute('alt', '');
        }
        if ($el->nodeName === 'a' && $el->hasAttribute('href')) {
            $h = resolve_url($el->getAttribute('href'));
            if (preg_match('~^javascript:~i', $h)) { $el->removeAttribute('href'); continue; }
            $h = local_link($h);
            $el->setAttribute('href', $h);
            if (str_starts_with($h, 'http')) { $el->setAttribute('target', '_blank'); $el->setAttribute('rel', 'noopener'); }
        }
        if ($el->nodeName === 'table') $el->setAttribute('class', 'data-table');
        foreach (['bgcolor', 'color', 'face', 'align', 'border'] as $x) $el->removeAttribute($x);
    }

    $out = '';
    foreach ($root->childNodes as $child) $out .= $dom->saveHTML($child);
    return trim($out);
}

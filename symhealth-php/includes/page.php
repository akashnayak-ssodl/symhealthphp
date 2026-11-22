<?php
declare(strict_types=1);
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/scraper.php';

/** Renders one inner page: template + content fetched from the source site. */
function render_page(string $slug): void
{
    $cfg = pages()[$slug] ?? null;
    if (!$cfg) { http_response_code(404); exit('Page not found'); }
    [$title, $path, $xpath] = $cfg;

    $force   = isset($_GET['refresh']) && hash_equals(REFRESH_KEY, (string) $_GET['refresh']);
    $source  = SOURCE_BASE . $path;
    $html    = fetch_remote($source, $slug, $force);
    $content = $html !== null ? extract_content($html, $xpath) : '';

    $pageTitle = $title;
    $current   = $slug;
    include __DIR__ . '/header.php';
    ?>
<section class="page-hero">
  <div class="wrap">
    <p class="crumb"><a href="index.php">Home</a> / <?= e($title) ?></p>
    <h1><?= e($title) ?></h1>
  </div>
</section>

<main>
  <section class="page-body">
    <div class="wrap">
      <?php if ($content !== ''): ?>
        <div class="remote"><?= $content /* sanitised in extract_content() */ ?></div>
      <?php else: ?>
        <p class="notice">This page could not be loaded right now. Please try again shortly or
          <a href="<?= e($source) ?>" target="_blank" rel="noopener">open it on the original site</a>.</p>
      <?php endif; ?>
    </div>
  </section>
</main>
<?php
    include __DIR__ . '/footer.php';
}

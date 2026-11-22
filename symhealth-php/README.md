# SYMHEALTH 2026 – PHP website

PHP 8.2 or newer. One PHP file per page. Page text and pictures are read from https://symhealth.siu.edu.in/
and shown in the new design.

## Run on your computer
    cd symhealth-php
    php -S localhost:8000
Open http://localhost:8000 (needs the PHP curl and dom extensions, normally included).

## Put online
Upload the whole folder to a PHP 8.2+ host (Apache). Make the `cache/` folder writable.
`.htaccess` lets `/about-symbiosis` work as well as `/about-symbiosis.php`.

## Files
    index.php                 home page
    about-symbiosis.php ...   one file per inner page (22 pages)
    includes/config.php       page list, menu, cache time, source URL
    includes/scraper.php      downloads a source page, removes its old menu/footer, keeps text + pictures
    includes/page.php         shared inner-page template
    includes/header.php, footer.php
    css/style.css, js/main.js, images/
    cache/                    saved copies of fetched pages (6 hours)

## How it works
Each page downloads the matching page of the source site, removes the old header, menu and footer,
makes picture and link addresses full addresses, points links between pages to the new pages,
and shows the text and pictures inside the new design. A saved copy is used for 6 hours; if the
source site is down, the last saved copy is shown.

## Tips
- Refresh one page now: `about.php?refresh=change-me` (change the key in includes/config.php).
- If a page shows extra or missing parts, put the content block's XPath as the third value of that page in `pages()` (includes/config.php).

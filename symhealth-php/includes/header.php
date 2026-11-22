<?php
declare(strict_types=1);
require_once __DIR__ . '/config.php';
$pageTitle ??= 'SYMHEALTH 2026';
?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title><?= e($pageTitle) ?> | SYMHEALTH 2026, Symbiosis International University</title>
<meta name="description" content="SYMHEALTH 2026: A National Conference on Embracing Smart Healthcare: Predictive, Precision and Personalized Health Systems. 17–18 April 2026, SIU Lavale, Pune.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Figtree:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<header class="top">
  <div class="wrap">
    <a class="brand" href="index.php" aria-label="Symbiosis International (Deemed University)"><img src="images/symbiosis-logo.png" alt="Symbiosis International (Deemed University)"></a>
    <a class="event-logo" href="index.php"><img src="<?= e(ASSET_BASE) ?>Symhealth-2026-logo.webp" alt="SYMHEALTH 2026"></a>
  </div>
</header>

<nav class="menu" aria-label="Main">
  <div class="wrap">
    <button class="burger" aria-expanded="false" aria-controls="menu-list">☰ Menu</button>
    <ul class="menu-list" id="menu-list">
<?php foreach (menu() as [$label, $target, $children]): ?>
      <li><a href="<?= e(menu_href($target)) ?>"<?= ($target === ($current ?? '')) ? ' aria-current="page"' : '' ?>><?= e($label) ?></a>
<?php if ($children): ?>
        <ul class="sub">
<?php foreach ($children as [$cl, $ct]): ?>
          <li><a href="<?= e(menu_href($ct)) ?>"<?= str_starts_with($ct, 'http') ? ' target="_blank" rel="noopener"' : '' ?>><?= e($cl) ?></a></li>
<?php endforeach; ?>
        </ul>
<?php endif; ?>
      </li>
<?php endforeach; ?>
    </ul>
  </div>
</nav>

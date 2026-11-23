<?php
declare(strict_types=1);
require_once __DIR__ . '/includes/config.php';

$pageTitle = 'Faculty of Medical and Health Sciences (FoMHS)';
$current = 'fhbs';
$focusAreas = [
    [
        'number' => '01',
        'title' => 'Healthcare education',
        'description' => 'Responding to the growing concern of healthcare education across the world.',
    ],
    [
        'number' => '02',
        'title' => 'Healthcare management',
        'description' => 'Recognizing the importance of healthcare management in a changing world.',
    ],
    [
        'number' => '03',
        'title' => 'A growing industry',
        'description' => 'Engaging with the needs of a rapidly growing healthcare industry.',
    ],
];

include __DIR__ . '/includes/header.php';
?>
<style>
.fomhs-hero{position:relative;overflow:hidden;padding:clamp(72px,10vw,128px) 0;background:linear-gradient(120deg,#6E0D14 0%,#C4161C 68%,#9F1119 100%);color:#fff}
.fomhs-hero::after{position:absolute;content:"";width:420px;height:420px;right:-110px;top:-190px;border:1px solid rgba(255,255,255,.2);border-radius:50%;box-shadow:0 0 0 45px rgba(255,255,255,.045),0 0 0 90px rgba(255,255,255,.035)}
.fomhs-hero .wrap{position:relative;z-index:1}
.fomhs-kicker{display:inline-flex;align-items:center;gap:10px;margin:0 0 22px;color:#FFE5C5;font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase}
.fomhs-kicker::before{content:"";width:28px;height:2px;background:#FBD9B5}
.fomhs-hero h1{max-width:820px;font-size:clamp(40px,6.6vw,72px);letter-spacing:-.04em}
.fomhs-hero p:last-child{max-width:660px;margin:24px 0 0;color:#F6CFCB;font-size:clamp(17px,2vw,20px);line-height:1.65}
.fomhs-overview{padding:clamp(64px,9vw,112px) 0}
.fomhs-overview-grid{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:clamp(36px,7vw,88px)}
.fomhs-campus{position:relative;min-height:390px;overflow:hidden;border-radius:22px 22px 100px 22px;background:#6E0D14}
.fomhs-campus img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.fomhs-campus figcaption{position:absolute;right:18px;bottom:18px;left:18px;padding:12px 16px;border:1px solid rgba(255,255,255,.35);border-radius:12px;background:rgba(65,10,14,.72);color:#fff;font-size:14px;backdrop-filter:blur(8px)}
.fomhs-copy .fomhs-kicker{color:#A7131B}
.fomhs-copy h2{margin-bottom:20px;font-size:clamp(30px,4vw,48px)}
.fomhs-copy>p{margin:0 0 18px;color:var(--muted);font-size:17px}
.fomhs-mission{margin-top:28px;padding:22px 24px;border-left:4px solid #E8844A;border-radius:0 12px 12px 0;background:var(--surface);font:600 19px/1.5 'Bricolage Grotesque',Figtree,sans-serif;color:var(--text)}
.fomhs-focus{padding:clamp(64px,8vw,96px) 0;background:var(--surface)}
.fomhs-section-heading{max-width:660px;margin:0 auto 44px;text-align:center}
.fomhs-section-heading h2{margin-bottom:14px;font-size:clamp(30px,4vw,44px)}
.fomhs-section-heading p{margin:0;color:var(--muted);font-size:17px}
.fomhs-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
.fomhs-card{min-height:230px;padding:30px;border:1px solid var(--line);border-radius:18px;background:var(--bg);box-shadow:0 8px 26px rgba(74,20,20,.045)}
.fomhs-number{display:inline-block;margin-bottom:26px;color:#B5121B;font:800 14px 'Bricolage Grotesque',sans-serif;letter-spacing:.12em}
.fomhs-card h3{margin-bottom:12px;font-size:23px}
.fomhs-card p{margin:0;color:var(--muted);font-size:16px;line-height:1.65}
.fomhs-cta{padding:54px 0;background:#6E0D14;color:#fff}
.fomhs-cta .wrap{display:flex;align-items:center;justify-content:space-between;gap:28px}
.fomhs-cta h2{margin:0 0 10px;font-size:clamp(25px,3vw,36px)}
.fomhs-cta p{margin:0;color:#F6CFCB}
.fomhs-cta .btn{flex:none}
@media(max-width:800px){.fomhs-overview-grid{grid-template-columns:1fr}.fomhs-campus{min-height:320px;order:2}.fomhs-cards{grid-template-columns:1fr}.fomhs-card{min-height:0}}
@media(max-width:600px){.fomhs-cta .wrap{align-items:flex-start;flex-direction:column}.fomhs-campus{min-height:260px}}
</style>

<main class="fomhs-page">
  <section class="fomhs-hero">
    <div class="wrap">
      <p class="fomhs-kicker">Symbiosis International University</p>
      <h1>Faculty of Medical and Health Sciences</h1>
      <p>Discover the vision and purpose of the Faculty of Medical and Health Sciences (FoMHS).</p>
    </div>
  </section>

  <section class="fomhs-overview">
    <div class="wrap fomhs-overview-grid">
      <figure class="fomhs-campus">
        <img src="<?= e(ASSET_BASE . rawurlencode('SIU building.jpg')) ?>" alt="Symbiosis International University campus at Lavale" loading="lazy">
        <figcaption>Symbiosis International University · Lavale, Pune</figcaption>
      </figure>
      <div class="fomhs-copy">
        <p class="fomhs-kicker">About FoMHS</p>
        <h2>Responding to a changing healthcare landscape.</h2>
        <p>The Faculty of Medical and Health Sciences is a conscious response to the growing concern of healthcare education and management across the world and the rapidly growing healthcare industry.</p>
        <p>FoMHS works towards creating health momentum, with the ultimate objective of creating a healthy world.</p>
        <div class="fomhs-mission">Creating a health momentum towards the ultimate objective of a healthy world.</div>
      </div>
    </div>
  </section>

  <section class="fomhs-focus">
    <div class="wrap">
      <div class="fomhs-section-heading">
        <h2>Responding to today’s needs</h2>
        <p>FoMHS brings attention to the challenges and opportunities shaping healthcare around the world.</p>
      </div>
      <div class="fomhs-cards">
        <?php foreach ($focusAreas as $area): ?>
          <article class="fomhs-card">
            <span class="fomhs-number"><?= e($area['number']) ?></span>
            <h3><?= e($area['title']) ?></h3>
            <p><?= e($area['description']) ?></p>
          </article>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <section class="fomhs-cta">
    <div class="wrap">
      <div>
        <h2>Explore FoMHS and its constituent institutes</h2>
        <p>Visit Symbiosis International University for more information.</p>
      </div>
      <a class="btn" href="https://siu.edu.in/higher-education-india/best-biomedical-research-colleges-india.php" target="_blank" rel="noopener">Explore on SIU.edu.in</a>
    </div>
  </section>
</main>
<?php include __DIR__ . '/includes/footer.php'; ?>

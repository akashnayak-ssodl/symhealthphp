<?php
declare(strict_types=1);
require_once __DIR__ . '/includes/config.php';

$pageTitle = 'Past Associates';
$current = 'associates';
$associates = [
    ['Public Health Foundation of India', 'PHFI-Logo-ENG-HINDI.jpg'],
    ['IIT Bombay', 'IIT-Bombay-logo.jpg'],
    ['Wellness Solutions', 'Wellness-Solutions.png'],
    ['PVCON', 'pvcon.png'],
    ['Avails', 'avails-parts.png'],
    ['Yashoda', 'Yashoda-Logo.jpg'],
    ['Senses', 'senses.jpg'],
    ['SJRI', 'SJRI.jpg'],
    ['Priyankka', 'priyankka.png'],
    ['Sairaj Digital', 'Sairaj-Digital-Logo.png'],
    ['Ansell', 'Hand-Protection-Partner-Ansell.jpg'],
    ['Regulus', 'regulus-logo.png'],
    ['Shwas 4 U', 'Shwas-4-U.jpg'],
    ['Kalagaar', 'Kalagaar-Logo.jpg'],
    ['Indus', 'Indus_logo-PNG.png'],
    ['Gupte Hospital', 'Gupte-Hospital-logo.jpg'],
    ['Bagic', 'Bagic-Logo.png'],
    ['ACME', 'acme-big.png'],
    ['Dozee', 'Dozee-Logo-Blue.png'],
    ['The George Institute', 'George-Institute.png'],
];

include __DIR__ . '/includes/header.php';
?>
<style>
.associates-hero{position:relative;overflow:hidden;padding:clamp(72px,10vw,128px) 0;background:linear-gradient(120deg,#6E0D14 0%,#C4161C 68%,#9F1119 100%);color:#fff}
.associates-hero::after{position:absolute;content:"";width:420px;height:420px;right:-110px;top:-190px;border:1px solid rgba(255,255,255,.2);border-radius:50%;box-shadow:0 0 0 45px rgba(255,255,255,.045),0 0 0 90px rgba(255,255,255,.035)}
.associates-hero .wrap{position:relative;z-index:1}
.associates-kicker{display:inline-flex;align-items:center;gap:10px;margin:0 0 22px;color:#FFE5C5;font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase}
.associates-kicker::before{content:"";width:28px;height:2px;background:#FBD9B5}
.associates-hero h1{max-width:760px;font-size:clamp(42px,7vw,76px);letter-spacing:-.04em}
.associates-hero p:last-child{max-width:620px;margin:24px 0 0;color:#F6CFCB;font-size:clamp(17px,2vw,20px);line-height:1.65}
.associates-intro{padding:76px 0 34px;text-align:center}
.associates-intro h2{margin-bottom:14px;font-size:clamp(28px,4vw,42px)}
.associates-intro p{max-width:660px;margin:0 auto;color:var(--muted);font-size:17px}
.associates-grid-section{padding:30px 0 110px}
.associates-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}
.associate-card{min-height:190px;display:grid;place-items:center;padding:24px;border:1px solid var(--line);border-radius:18px;background:var(--bg);box-shadow:0 8px 26px rgba(74,20,20,.045);transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease}
.associate-card:hover{transform:translateY(-4px);border-color:#E8844A;box-shadow:0 14px 32px rgba(74,20,20,.1)}
.associate-card img{display:block;width:100%;height:100px;object-fit:contain}
.associates-note{margin-top:30px;padding:22px 26px;border-left:4px solid #E8844A;border-radius:0 12px 12px 0;background:var(--surface);color:var(--muted);font-size:15px}
.associates-cta{padding:54px 0;background:var(--surface)}
.associates-cta .wrap{display:flex;align-items:center;justify-content:space-between;gap:28px}
.associates-cta h2{margin:0 0 10px;font-size:clamp(24px,3vw,34px)}
.associates-cta p{margin:0;color:var(--muted)}
.associates-cta .btn{flex:none}
@media(max-width:850px){.associates-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:600px){.associates-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.associate-card{min-height:145px;padding:16px}.associate-card img{height:78px}.associates-cta .wrap{align-items:flex-start;flex-direction:column}}
@media(prefers-reduced-motion:reduce){.associate-card{transition:none}.associate-card:hover{transform:none}}
</style>

<main class="associates-page">
  <section class="associates-hero">
    <div class="wrap">
      <p class="associates-kicker">SYMHEALTH · A community effort</p>
      <h1>Stronger healthcare, built together.</h1>
      <p>We are grateful to the organizations that have supported and partnered with SYMHEALTH over the years.</p>
    </div>
  </section>

  <section class="associates-intro">
    <div class="wrap">
      <h2>Our past associates</h2>
      <p>A selection of organizations featured among SYMHEALTH's past associates. Their collaboration has helped bring healthcare leaders and ideas together.</p>
    </div>
  </section>

  <section class="associates-grid-section" aria-label="Past associate organizations">
    <div class="wrap">
      <div class="associates-grid">
        <?php foreach ($associates as [$name, $logo]): ?>
          <div class="associate-card">
            <img src="<?= e(ASSET_BASE . 'associate/' . rawurlencode($logo)) ?>" alt="<?= e($name) ?>" loading="lazy">
          </div>
        <?php endforeach; ?>
      </div>
      <p class="associates-note">These are past associates, not a confirmation of current SYMHEALTH 2026 sponsorship or partnership.</p>
    </div>
  </section>

  <section class="associates-cta">
    <div class="wrap">
      <div>
        <h2>Interested in connecting with us?</h2>
        <p>Contact the SYMHEALTH team to discuss partnership enquiries.</p>
      </div>
      <a class="btn red" href="contact-us.php">Contact the team</a>
    </div>
  </section>
</main>
<?php include __DIR__ . '/includes/footer.php'; ?>

<?php
declare(strict_types=1);
require_once __DIR__ . '/includes/config.php';

$pageTitle = 'Messages';
$current = 'messages';
$messages = [
    [
        'desk' => "From the Chancellor's Desk",
        'name' => 'Prof. Dr. S. B. Mujumdar',
        'role' => 'Founder & President, Symbiosis',
        'image' => '31.jpeg',
        'image_alt' => 'Prof. Dr. S. B. Mujumdar',
        'paragraphs' => [
            'I compliment the Faculty of Medical and Health Sciences (FoMHS), Symbiosis International (Deemed University) SIU, for organizing SYMHEALTH 2026, A National Conference on Embracing Smart Healthcare: Predictive, Precision and Personalized Health Systems.',
            'It is befitting that the University would convene an event that marks the significance of integrating ideas and information from across many disciplines. This is in consonance with our guiding mission of forging a nationwide understanding through quality education.',
            'The Faculty of Medical & Health Sciences aims at promoting an innovative interdisciplinary model for both education and training of healthcare professionals. We believe that the act of expanding and disseminating knowledge must not be an insular activity, limited to the institution. It must be debated and contested with peers in academia, the industry, and beyond. I am confident that all stakeholders in health sciences will find opportunities to be heard, to learn, and to collaborate in the upcoming Conference.',
            'I invite you to join us in making the Conference a success.',
        ],
    ],
    [
        'desk' => "From the Pro-Chancellor's Desk",
        'name' => 'Dr. Vidya Yeravdekar',
        'role' => 'Pro-Chancellor, Symbiosis International (Deemed University)',
        'image' => 'message-vidya.png',
        'image_alt' => 'Dr. Vidya Yeravdekar',
        'paragraphs' => [
            'It is my pleasure to invite you to attend SYMHEALTH 2026, an interdisciplinary Conference organized by the Faculty of Medical and Health Sciences (FoMHS), Symbiosis International (Deemed University) SIU.',
            'The Conference brings together many important strains of the healthcare domain and it is quite appropriate that it is hosted by Symbiosis which has championed the values of academic excellence since its inception.',
            'The theme this year is ‘A National Conference on Embracing Smart Healthcare: Predictive, Precision and Personalized Health Systems’. It underscores the importance of applying the integrative strategies to the theory and practice of health sciences. One needs only to consider any one of the urgent public health issues, such as diabetes to grasp the achievable gains that accrue through a collaborative and trans-disciplinary approach. The Conference will highlight some such contemporary issues in healthcare that cannot be discussed insularly and beg the context of a wider discourse.',
            'As well as participating in the Conference, I hope that you will take time to explore the historical city of Pune and the scenic locales of our University campus at Lavale. This event promises to be a premier platform to showcase the innovation and dynamism in health sciences in a globalized world.',
            'I wish the Conference great success.',
        ],
    ],
    [
        'desk' => "From the Vice Chancellor's Desk",
        'name' => 'Dr Ramakrishna Raman',
        'role' => 'Vice Chancellor, Symbiosis International (Deemed University)',
        'image' => 'Dr_R_Raman_VC.jpg',
        'image_alt' => 'Vice Chancellor, Symbiosis International (Deemed University)',
        'paragraphs' => [
            'I am thrilled to extend a warm welcome to SYMHEALTH 2026, a prestigious event organized by the Faculty of Medical and Health Sciences at Symbiosis International (Deemed University).',
            'This year, our conference continues to uphold the tradition of excellence established by its predecessors, focusing on the vital theme of “A National Conference on Embracing Smart Healthcare: Predictive, Precision and Personalized Health Systems”. Scheduled to take place on April 17th & 18th, 2026 at the SIU campus at Lavale, SYMHEALTH 2026 promises to be a platform where academia, industry, and stakeholders converge to address pressing challenges and explore innovative solutions in healthcare.',
            'At Symbiosis International (Deemed University), we recognize the imperative of adopting an interdisciplinary approach to healthcare education and training. Our Faculty of Medical and Health Sciences is committed to equipping healthcare professionals with the knowledge and skills needed to navigate the dynamic healthcare landscape effectively.',
            'SYMHEALTH 2026 offers a unique opportunity for participants to exchange insights, present emerging opportunities, forge networking connections, and share valuable resources. The interactive sessions over the two days, led by renowned subject experts, cover a diverse range of topics across the healthcare spectrum, ensuring a rich and engaging experience for all attendees.',
            'I am confident that the research paper presentations and poster presentations at SYMHEALTH 2026 will foster vibrant discussions and provide impetus to interdisciplinary collaboration across various domains. Together, let us seize this opportunity to exchange ideas, inspire innovation, and contribute to building sustainable healthcare systems for the well-being of our population and planet.',
            'I extend my heartfelt gratitude to the organizers, speakers, presenters, and participants for their invaluable contributions to this esteemed gathering. Your dedication and enthusiasm are instrumental in making SYMHEALTH 2026 a resounding success.',
        ],
    ],
    [
        'desk' => "From the Provost's Desk",
        'name' => 'Dr. Rajiv Yeravdekar',
        'role' => 'Provost, Faculty of Medical and Health Sciences (FoMHS), Symbiosis International (Deemed University)',
        'image' => '42.jpeg',
        'image_alt' => 'Dr. Rajiv Yeravdekar',
        'paragraphs' => [
            'As the Provost of the Faculty of Medical and Health Sciences (FoMHS), Symbiosis International (Deemed University) SIU, I am delighted to invite you to SYMHEALTH 2026 – “A National Conference on Embracing Smart Healthcare: Predictive, Precision and Personalized Health Systems” on April 17th & 18th, 2026 at the SIU campus, Lavale, Pune.',
            'The FoMHS prides itself on preparing the next generation of academics, practitioners and researchers who are trained to apply an integrative approach to the study of Health Sciences. We follow diverse pedagogic and research traditions and employ a number of disciplines including scientific, socio-behavioral and technological determinants of health and wellness. The theme of the Conference will underpin the need to draw on the full range of complementary streams and professions within the Health Sciences and beyond.',
            'The academic sessions, keynote lectures, workshops, and research and poster paper presentations are all designed to present to you a comprehensive collage of information and ideas. I invite you to peruse the ensuing pages, which highlight in great detail all the information related to the event.',
            'I am confident that the Conference will provide a forum for you to widen your knowledge base and revitalize networking opportunities with peers from diverse disciplines, leading researchers, practitioners and other stakeholders.',
            "I do hope that you will join us in what promises to be, a 'must attend' event!",
        ],
    ],
];

include __DIR__ . '/includes/header.php';
?>
<style>
.messages-hero{position:relative;overflow:hidden;padding:clamp(64px,8vw,96px) 0;background:linear-gradient(120deg,#6E0D14 0%,#C4161C 68%,#9F1119 100%);color:#fff}
.messages-hero::after{position:absolute;content:"";width:360px;height:360px;right:-100px;top:-175px;border:1px solid rgba(255,255,255,.2);border-radius:50%;box-shadow:0 0 0 42px rgba(255,255,255,.045),0 0 0 84px rgba(255,255,255,.035)}
.messages-hero .wrap{position:relative;z-index:1}
.messages-kicker{display:inline-flex;align-items:center;gap:10px;margin:0 0 18px;color:#FFE5C5;font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase}
.messages-kicker::before{content:"";width:28px;height:2px;background:#FBD9B5}
.messages-hero h1{font-size:clamp(40px,6vw,64px);letter-spacing:-.04em}
.messages-hero p:last-child{max-width:620px;margin:18px 0 0;color:#F6CFCB;font-size:17px;line-height:1.65}
.messages-list{padding:64px 0 96px;background:var(--bg)}
.message-section{padding:38px 0 42px;border-bottom:2px dashed #781518}
.message-section:last-child{border-bottom:0}
.message-desk{margin:0 0 24px;color:#A7131B;font-size:clamp(18px,2.2vw,23px);font-weight:700;letter-spacing:.045em;text-transform:uppercase}
.message-layout{display:grid;grid-template-columns:minmax(0,2fr) minmax(210px,1fr);gap:clamp(30px,5vw,64px);align-items:start}
.message-copy p{margin:0 0 18px;color:var(--text);font-size:16px;line-height:1.8;text-align:justify}
.message-copy p:last-child{margin-bottom:0}
.message-person{text-align:center}
.message-portrait{max-width:280px;margin:0 auto 16px;padding:8px;overflow:hidden;border:1px solid var(--line);border-radius:14px;background:var(--surface)}
.message-portrait img{display:block;width:100%;max-height:300px;object-fit:contain;border-radius:8px}
.message-person h2{margin:0 0 7px;font-size:18px;line-height:1.3}
.message-person p{margin:0;color:var(--muted);font-size:14px;line-height:1.55}
@media(max-width:760px){.messages-list{padding:44px 0 72px}.message-section{padding:30px 0 34px}.message-layout{grid-template-columns:1fr;gap:26px}.message-person{max-width:280px;margin:0 auto}.message-portrait{max-width:220px}.message-copy p{text-align:left}}
</style>

<main class="messages-page">
  <section class="messages-hero">
    <div class="wrap">
      <p class="messages-kicker">SYMHEALTH 2026 · Leadership messages</p>
      <h1>Messages</h1>
      <p>Welcome notes and perspectives from the leadership of Symbiosis International and FoMHS.</p>
    </div>
  </section>

  <section class="messages-list" aria-label="Messages from university leadership">
    <div class="wrap">
      <?php foreach ($messages as $message): ?>
        <article class="message-section">
          <h3 class="message-desk"><?= e($message['desk']) ?></h3>
          <div class="message-layout">
            <div class="message-copy">
              <?php foreach ($message['paragraphs'] as $paragraph): ?>
                <p><?= e($paragraph) ?></p>
              <?php endforeach; ?>
            </div>
            <aside class="message-person" aria-label="Message author">
              <div class="message-portrait">
                <img src="<?= e(ASSET_BASE . rawurlencode($message['image'])) ?>" alt="<?= e($message['image_alt']) ?>" loading="lazy">
              </div>
              <h2><?= e($message['name']) ?></h2>
              <p><?= e($message['role']) ?></p>
            </aside>
          </div>
        </article>
      <?php endforeach; ?>
    </div>
  </section>
</main>
<?php include __DIR__ . '/includes/footer.php'; ?>

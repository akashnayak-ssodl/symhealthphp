import { useEffect, useState } from 'react';
import CampusGallery from '../components/CampusGallery.jsx';
import SmartLink from '../components/SmartLink.jsx';
import { assetBase, importantDates, reports } from '../data.js';

const heroImages = [
  `${assetBase}SIU%20lavale.jpg`,
  `${assetBase}SIU%202.jpg`,
  `${assetBase}SIU%20building.jpg`,
  `${assetBase}Lavale.jpg`,
  `${assetBase}banner45.jpg`,
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [shareStatus, setShareStatus] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroImages.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  async function shareEvent() {
    const shareData = { title: 'SYMHEALTH 2026', text: 'Embracing Smart Healthcare — Predictive, Precision and Personalized Health Systems.', url: window.location.origin };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareStatus('Thanks for sharing');
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareData.url);
        setShareStatus('Link copied');
      } else {
        setShareStatus('Sharing is unavailable in this browser');
      }
    } catch (error) {
      if (error.name === 'AbortError') return;
      setShareStatus('Could not share this event');
    }
    window.setTimeout(() => setShareStatus(''), 2600);
  }

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        {heroImages.map((src, index) => <img className={activeSlide === index ? 'is-active' : ''} src={src} alt="" key={src} />)}
      </div>
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="event-status"><span className="status-dot" /> Conference concluded · 17–18 April 2026</span>
          <p className="eyebrow hero-eyebrow">A national conference · Lavale, Pune</p>
          <h1 id="hero-title">Health, <em>reimagined.</em></h1>
          <p className="hero-theme">Embracing Smart Healthcare: Predictive, Precision and Personalized Health Systems.</p>
          <div className="hero-actions">
            <SmartLink to="/concept" className="button button-light">Explore the conference <span aria-hidden="true">↗</span></SmartLink>
            <button className="button button-outline" type="button" onClick={shareEvent} aria-live="polite">{shareStatus || 'Share event ↗'}</button>
          </div>
          <div className="slide-controls" aria-label="Campus photo slides">
            {heroImages.map((_, index) => (
              <button type="button" key={index} aria-label={`Show campus image ${index + 1}`} aria-pressed={activeSlide === index} onClick={() => setActiveSlide(index)} />
            ))}
            <span>{String(activeSlide + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}</span>
          </div>
        </div>
        <div className="hero-card">
          <span className="eyebrow">Two days of exchange</span>
          <strong>17 <i>—</i> 18</strong>
          <span className="hero-month">APRIL 2026</span>
          <span className="hero-rule" />
          <span>Symbiosis International University</span>
          <span>Lavale · Pune · India</span>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>Connecting people shaping the future of health</span><span aria-hidden="true">↓</span>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="quick-facts" aria-label="Conference highlights">
        <div className="container facts-grid">
          <div><strong>25 years</strong><span>conference legacy</span></div>
          <div><strong>1,400+</strong><span>delegates each year</span></div>
          <div><strong>2 days</strong><span>talks, classes and posters</span></div>
          <div><strong>Allied fields</strong><span>health, research and technology</span></div>
        </div>
      </section>
      <section className="section-space" id="about">
        <div className="container about-grid">
          <div>
            <span className="eyebrow">The conference</span>
            <h2>Better health starts with <em>better questions.</em></h2>
            <p className="large-copy">SYMHEALTH 2026 brought together healthcare professionals, researchers and innovators to explore the next generation of health systems.</p>
            <p>Hosted by Symbiosis International (Deemed University), the two-day national conference created space for contemporary topics, paper presentations, master classes and meaningful connections across the healthcare community.</p>
            <SmartLink to="/about" className="text-link">Discover the host university <span aria-hidden="true">→</span></SmartLink>
          </div>
          <div className="about-visual">
            <img src={`${assetBase}27.jpg`} alt="SYMHEALTH conference gathering" loading="lazy" />
            <div className="visual-caption"><span>SYMHEALTH</span><strong>Ideas for healthier futures.</strong></div>
          </div>
        </div>
      </section>
      <section className="theme-section section-space">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow">Three connected ideas</span><h2>A smarter way to think about care.</h2></div>
            <p>From spotting risk sooner to shaping care around each person, smart healthcare is a shared journey.</p>
          </div>
          <div className="theme-grid">
            <article className="theme-card predictive"><span className="theme-index">01</span><div className="theme-symbol" aria-hidden="true">⌁</div><h3>Predictive</h3><p>Use data and insight to identify health risks early and guide timely decisions.</p><SmartLink to="/topics">Explore the theme <span aria-hidden="true">↗</span></SmartLink></article>
            <article className="theme-card precision"><span className="theme-index">02</span><div className="theme-symbol" aria-hidden="true">✳</div><h3>Precision</h3><p>Bring diagnostics, evidence and context together for better-informed care.</p><SmartLink to="/topics">Explore the theme <span aria-hidden="true">↗</span></SmartLink></article>
            <article className="theme-card personalized"><span className="theme-index">03</span><div className="theme-symbol" aria-hidden="true">◉</div><h3>Personalized</h3><p>Build services around the person, from the hospital to the home.</p><SmartLink to="/topics">Explore the theme <span aria-hidden="true">↗</span></SmartLink></article>
          </div>
        </div>
      </section>
      <section className="section-space dates-section">
        <div className="container dates-grid">
          <div className="dates-intro"><span className="eyebrow">The 2026 edition</span><h2>Key dates, <em>at a glance.</em></h2><p>The published milestones for abstracts and the conference are collected here for reference.</p><span className="closed-pill">This edition has concluded</span></div>
          <ol className="timeline">
            {importantDates.map(([date, label], index) => <li className={index === 4 ? 'is-event-date' : ''} key={date}><time>{date}</time><span>{label}</span></li>)}
          </ol>
        </div>
      </section>
      <section className="video-section section-space">
        <div className="container video-grid">
          <div><span className="eyebrow">From the archive</span><h2>One community. <em>Many perspectives.</em></h2><p>Revisit a SYMHEALTH conference moment and the people behind the conversation.</p><SmartLink to="/videos" className="text-link">Explore the video gallery <span aria-hidden="true">→</span></SmartLink></div>
          <div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/TD7HarXwEKg" title="SYMHEALTH conference video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
        </div>
      </section>
      <section className="campus-section section-space">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">The host campus</span><h2>Moments from <em>Lavale.</em></h2></div><p>Take a closer look at the Symbiosis International University campus. Select a photo to open the gallery.</p></div>
          <CampusGallery />
        </div>
      </section>
      <section className="reports-section section-space">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">From the archives</span><h2>Past conference reports.</h2></div><p>Browse reports from previous editions and explore how the SYMHEALTH conversation has grown.</p></div>
          <div className="report-grid">{reports.map(([label, url], index) => <a className="report-card" href={url} target="_blank" rel="noopener noreferrer" key={label}><span>{String(index + 1).padStart(2, '0')}</span><strong>{label}</strong><small>Open report <span aria-hidden="true">↗</span></small></a>)}</div>
          <a className="text-link" href={`${assetBase}pdf/Down_Memory_Lane.pdf`} target="_blank" rel="noopener noreferrer">Down memory lane <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section className="partners-section section-space">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Our partners</span><h2>Organizations behind the community.</h2></div><p>Associates and media partners who have supported SYMHEALTH.</p></div>
          <img className="partner-logos" src={`${assetBase}images/brands.jpg`} alt="SYMHEALTH partner and associate logos" loading="lazy" />
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-inner"><div><span className="eyebrow">Continue exploring</span><h2>Take the conversation <em>forward.</em></h2><p>Explore the themes, visit the campus gallery or get in touch with the conference team.</p></div><div className="closing-links"><SmartLink to="/concept">Conference concept <span>↗</span></SmartLink><SmartLink to="/photos">Campus gallery <span>↗</span></SmartLink><SmartLink to="/contact-us">Contact the team <span>↗</span></SmartLink></div></div>
      </section>
    </>
  );
}

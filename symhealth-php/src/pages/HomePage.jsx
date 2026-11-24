import { useEffect, useState } from 'react';
import PartnerCarousel from '../components/PartnerCarousel.jsx';
import { assetBase, importantDates } from '../data.js';

const heroImages = [
  `${assetBase}SIU%20lavale.jpg`,
  `${assetBase}SIU%202.jpg`,
  `${assetBase}SIU%20building.jpg`,
  `${assetBase}Lavale.jpg`,
  `${assetBase}banner45.jpg`,
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroImages.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        {heroImages.map((src, index) => <img className={activeSlide === index ? 'is-active' : ''} src={src} alt="" key={src} />)}
      </div>
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">A National Conference on</p>
          <h1 id="hero-title">SYMHEALTH 2026</h1>
          <p className="hero-theme">Embracing Smart Healthcare: Predictive, Precision and Personalized Health Systems</p>
          <p className="hero-event-details"><strong>April 17th &amp; 18th, 2026</strong><br />Venue: Symbiosis International University, Lavale.</p>
          <div className="slide-controls" aria-label="Campus photo slides">
            {heroImages.map((_, index) => (
              <button type="button" key={index} aria-label={`Show campus image ${index + 1}`} aria-pressed={activeSlide === index} onClick={() => setActiveSlide(index)} />
            ))}
            <span>{String(activeSlide + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="video-section section-space" id="about">
        <div className="container video-grid">
          <div>
            <span className="eyebrow">About SYMHEALTH</span>
            <h2>SYMHEALTH 2026</h2>
            <p>A national conference on embracing smart healthcare: predictive, precision and personalized health systems.</p>
            <p>Hosted at Symbiosis International University, Lavale, Pune, on April 17th and 18th, 2026.</p>
          </div>
          <div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/TD7HarXwEKg" title="SYMHEALTH conference video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
        </div>
      </section>
      <section className="section-space dates-section" id="highlights">
        <div className="container dates-grid">
          <div className="dates-intro"><span className="eyebrow">SYMHEALTH 2026</span><h2>Important dates</h2></div>
          <ol className="timeline">
            {importantDates.map(([date, label], index) => <li className={index === 4 ? 'is-event-date' : ''} key={date}><time>{date}</time><span>{label}</span></li>)}
          </ol>
        </div>
      </section>
      <section className="partners-section section-space">
        <div className="container">
          <div className="section-heading"><div><span className="eyebrow">Our partners</span><h2>Partners and associates</h2></div></div>
          <PartnerCarousel />
        </div>
      </section>
    </>
  );
}

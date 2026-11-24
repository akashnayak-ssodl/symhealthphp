import { faqItems } from '../data.js';
import universityLogo from '../../images/symbiosis-logo.png';
import { eventLogo } from '../data.js';
import CampusGallery from './CampusGallery.jsx';
import SmartLink from './SmartLink.jsx';

export function PageHero({ title }) {
  return (
    <section className="page-banner">
      <div className="container">
        <div className="breadcrumbs"><SmartLink to="/">Home</SmartLink><span aria-hidden="true">/</span><span>{title}</span></div>
        <span className="eyebrow">SYMHEALTH 2026</span>
        <h1>{title}</h1>
      </div>
      <div className="banner-orbit orbit-one" /><div className="banner-orbit orbit-two" />
    </section>
  );
}

function FaqContent() {
  return (
    <div className="faq-list">
      {faqItems.map((item, index) => (
        <details className="faq-item" key={item.question} open={index === 0}>
          <summary><span>{item.question}</span><span className="faq-plus" aria-hidden="true">+</span></summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export default function PageContent({ slug, page, children }) {
  return (
    <>
      <PageHero title={page.title} />
      <div className="page-content">
        <div className="container page-layout">
          <aside className="page-aside">
            <span className="eyebrow">In this section</span>
            <p>Explore conference details, resources and information for the SYMHEALTH community.</p>
            <SmartLink to="/contact-us" className="aside-contact">Have a question? <span>Contact the team →</span></SmartLink>
          </aside>
          <article className="page-article">
            <p className="page-intro">{page.intro}</p>
            {slug === 'faq' && <FaqContent />}
            {slug === 'photos' && <CampusGallery />}
            {slug === 'videos' && <div className="page-video"><iframe src="https://www.youtube-nocookie.com/embed/TD7HarXwEKg" title="SYMHEALTH conference video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>}
            {slug === 'logos' && (
              <div className="logo-showcase">
                <div><img src={universityLogo} alt="Symbiosis International (Deemed University)" /><span>Symbiosis International (Deemed University)</span></div>
                <div><img src={eventLogo} alt="SYMHEALTH 2026" /><span>SYMHEALTH 2026 · Smart Healthcare</span></div>
              </div>
            )}
            {children}
            <div className="page-sections">
              {page.sections.map((section, index) => (
                <section className="content-block" key={section.title}>
                  <span className="content-index">0{index + 1}</span>
                  <div><h2>{section.title}</h2><p>{section.body}</p>{section.link && <SmartLink to={section.link} className="text-link">{section.linkLabel} <span aria-hidden="true">↗</span></SmartLink>}</div>
                </section>
              ))}
            </div>
            {slug === 'schedule' && <SmartLink to="/important-dates" className="inline-card">Review the important dates <span aria-hidden="true">→</span></SmartLink>}
            {slug === 'contact-us' && <div className="contact-actions"><a className="button button-primary" href="mailto:symhealthregistration@siu.edu.in">Email the team</a><a className="button button-soft" href="tel:+918888892258">Call +91 88888 92258</a></div>}
          </article>
        </div>
      </div>
    </>
  );
}

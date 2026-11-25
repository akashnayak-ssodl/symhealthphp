import { lazy, Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../images/symbiosis-symhealth-logo.png';
import SmartLink from './components/SmartLink.jsx';
import { eventLogo, navigation, pageData } from './data.js';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));

const pageComponents = {
  'about-pune': lazy(() => import('./pages/AboutPune.jsx')),
  'about-symbiosis': lazy(() => import('./pages/AboutSymbiosis.jsx')),
  about: lazy(() => import('./pages/AboutUniversity.jsx')),
  'abstract-submission': lazy(() => import('./pages/AbstractSubmission.jsx')),
  associates: lazy(() => import('./pages/Associates.jsx')),
  call_for_papers: lazy(() => import('./pages/CallForPapers.jsx')),
  concept: lazy(() => import('./pages/Concept.jsx')),
  'contact-us': lazy(() => import('./pages/ContactUs.jsx')),
  faq: lazy(() => import('./pages/Faq.jsx')),
  fhbs: lazy(() => import('./pages/Fhbs.jsx')),
  'how-to-reach': lazy(() => import('./pages/HowToReach.jsx')),
  logos: lazy(() => import('./pages/Logos.jsx')),
  'media-partners': lazy(() => import('./pages/MediaPartners.jsx')),
  messages: lazy(() => import('./pages/Messages.jsx')),
  photos: lazy(() => import('./pages/Photos.jsx')),
  'registration-fees': lazy(() => import('./pages/RegistrationFees.jsx')),
  'registration-guidelines': lazy(() => import('./pages/RegistrationGuidelines.jsx')),
  schedule: lazy(() => import('./pages/Schedule.jsx')),
  speaker_profile: lazy(() => import('./pages/SpeakerProfile.jsx')),
  topics: lazy(() => import('./pages/Topics.jsx')),
  venue: lazy(() => import('./pages/Venue.jsx')),
  videos: lazy(() => import('./pages/Videos.jsx')),
  'where-to-stay': lazy(() => import('./pages/WhereToStay.jsx')),
};

const navigationByLabel = new Map(navigation.map((item) => [item.label, item]));
const reportLinks = new Map(navigationByLabel.get('Reports').children.map((item) => [item.label, item]));
const sponsorAndGalleryLinks = [
  ...navigationByLabel.get('Sponsorship').children,
  ...navigationByLabel.get('Gallery').children,
];
const reportNavigation = {
  label: 'REPORT',
  children: [
    reportLinks.get('Connexions 2018'),
    {
      label: 'SYMHEALTH 2018',
      children: [
        reportLinks.get('SYMHEALTH 2018 (4 May)'),
        reportLinks.get('SYMHEALTH 2018 (5 May)'),
      ],
    },
    reportLinks.get('SYMHEALTH 2019'),
    {
      label: 'SYMHEALTH 2022',
      children: [
        reportLinks.get('SYMHEALTH 2022 (22 Apr)'),
        reportLinks.get('SYMHEALTH 2022 (23 Apr)'),
      ],
    },
    reportLinks.get('SYMHEALTH 2023'),
    reportLinks.get('SYMHEALTH 2024'),
    reportLinks.get('SYMHEALTH 2025'),
  ],
};
const sponsorsAndGalleryNavigation = {
  label: 'SPONSORSHIP & GALLERY',
  children: sponsorAndGalleryLinks,
};
const headerNavigation = [
  { ...navigationByLabel.get('Home'), icon: 'home' },
  { ...navigationByLabel.get('About Us'), label: 'ABOUT US' },
  navigationByLabel.get('SYMHEALTH 2026'),
  { ...navigationByLabel.get('Speakers'), label: 'SPEAKERS' },
  { ...navigationByLabel.get('Call for Papers'), label: 'CALL FOR PAPER' },
  { ...navigationByLabel.get('Registration'), label: 'REGISTRATION' },
  reportNavigation,
  sponsorsAndGalleryNavigation,
  { label: 'CONTACT US', to: '/contact-us' },
];

function NavigationEntry({ item, pathname }) {
  if (item.children) {
    return (
      <li className="nav-item" key={item.label}>
        <details className="nav-dropdown">
          <summary>{item.label}</summary>
          <ul className="dropdown-list">
            {item.children.map((child) => <NavigationEntry item={child} pathname={pathname} key={child.label} />)}
          </ul>
        </details>
      </li>
    );
  }
  return (
    <li className="nav-item" key={item.label}>
      <SmartLink to={item.to} aria-current={pathname === item.to ? 'page' : undefined}>
        {item.icon === 'home' ? (
          <>
            <svg className="home-nav-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 10.8 12 3l9 7.8M5.5 9.2V21h13V9.2M9.5 21v-7h5v7" />
            </svg>
            <span className="sr-only">{item.label}</span>
          </>
        ) : item.label}
      </SmartLink>
    </li>
  );
}

function NavigationItems({ items, id, pathname }) {
  return (
    <ul id={id} className="nav-list">
      {items.map((item) => <NavigationEntry item={item} pathname={pathname} key={item.label} />)}
    </ul>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname.toLowerCase() === '/index.php';

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const closeDropdowns = (event) => {
      document.querySelectorAll('.nav-dropdown[open]').forEach((dropdown) => {
        if (!dropdown.contains(event.target)) dropdown.open = false;
      });
    };
    document.addEventListener('pointerdown', closeDropdowns);
    return () => document.removeEventListener('pointerdown', closeDropdowns);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(false);
      return undefined;
    }
    const updateScrollState = () => {
      setIsScrolled((current) => {
        const next = window.scrollY > 90;
        return current === next ? current : next;
      });
    };
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, [isHome]);

  return (
    <div className={`home-header-shell${isHome ? '' : ' page-header-shell'}${isScrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-open' : ''}`}>
      <div className="home-utility-strip">
        <div className="home-utility-inner">Symbiosis International University, Lavale.</div>
      </div>
      <header className="site-header home-masthead">
        <div className="container home-masthead-inner">
          <SmartLink to="/" className="university-brand home-university-brand" aria-label="Symbiosis International home">
            <img src={logo} alt="Symbiosis International (Deemed University)" />
          </SmartLink>
          <SmartLink to="/" className="event-brand home-event-brand" aria-label="SYMHEALTH 2026 home">
            <img src={eventLogo} alt="" />
            <span className="event-brand-copy">
              <strong>SYMHEALTH <span>2026</span></strong>
              <small>SMART HEALTHCARE · LAVALE, PUNE</small>
            </span>
          </SmartLink>
          <nav className="home-top-nav" aria-label="Conference navigation">
            <NavigationItems items={headerNavigation} id="home-top-navigation" pathname={location.pathname} />
          </nav>
          <div className="header-actions home-header-actions">
            <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="home-top-navigation" onClick={() => setMenuOpen((open) => !open)}>
              <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span> <span>{menuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>
      </header>
      <nav className="compact-home-nav" aria-label="Conference navigation">
        <div className="container compact-home-inner">
          <SmartLink to="/" className="compact-event-brand" aria-label="SYMHEALTH 2026 home">
            <img src={logo} alt="Symbiosis International (Deemed University)" />
            <strong>SYMHEALTH <span>2026</span></strong>
          </SmartLink>
          <div className="compact-home-links">
            <NavigationItems items={headerNavigation} id="compact-home-navigation" pathname={location.pathname} />
          </div>
          <button className="menu-toggle compact-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="compact-home-navigation" onClick={() => setMenuOpen((open) => !open)}>
            <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span> <span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-topline">
        <span>Symbiosis International (Deemed University)</span>
        <span>Lavale, Pune <i aria-hidden="true">·</i> India</span>
      </div>
      <div className="container footer-grid">
        <div className="footer-about">
          <SmartLink to="/" className="footer-brand"><span className="event-mark">S</span> SYMHEALTH 2026</SmartLink>
          <p>A national conference on embracing smart healthcare: predictive, precision and personalized health systems.</p>
          <span className="footer-about-note">Ideas for a healthier future.</span>
        </div>
        <div>
          <h2>Conference office</h2>
          <p>Dr. Parimala Veluvali, Director<br />Symbiosis School for Online and Digital Learning (SSODL)</p>
          <p>4th floor, SUHRC Bldg, Hill Base Campus, SIU Knowledge Village, At Post Lavale, Taluka Mulshi, Dist. Pune 412115, Maharashtra, India</p>
        </div>
        <div>
          <h2>Get in touch</h2>
          <a href="tel:+918888892258">+91 88888 92258</a>
          <a href="tel:+912066975084">+91 20 66975084 / 89</a>
          <a href="mailto:symhealthregistration@siu.edu.in">Registration: symhealthregistration@siu.edu.in</a>
          <a href="mailto:symhealth@ssodl.edu.in">Abstracts: symhealth@ssodl.edu.in</a>
          <p className="footer-hours">Contact hours: 9 am to 4 pm IST</p>
        </div>
        <div>
          <h2>Explore</h2>
          <div className="footer-explore-links">
            <SmartLink to="/call_for_papers">Call for Papers</SmartLink>
            <SmartLink to="/registration-fees">Registration</SmartLink>
            <SmartLink to="/about-pune">About Pune</SmartLink>
          </div>
          <nav className="footer-socials" aria-label="Social media">
            <a href="https://www.facebook.com/Symhealth/" target="_blank" rel="noopener noreferrer">Facebook <span aria-hidden="true">↗</span></a>
            <a href="https://twitter.com/SymHealth2018" target="_blank" rel="noopener noreferrer">Twitter <span aria-hidden="true">↗</span></a>
            <a href="https://www.youtube.com/channel/UCkQbCp7hvJnTl3N6KkuSzoQ" target="_blank" rel="noopener noreferrer">YouTube <span aria-hidden="true">↗</span></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Symbiosis International (Deemed University)</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

function NotFound() {
  return <section className="not-found container"><span className="eyebrow">404 · Not found</span><h1>This page isn’t here.</h1><p>Try the main navigation or return to the SYMHEALTH home page.</p><SmartLink className="button button-primary" to="/">Go to the home page</SmartLink></section>;
}

function resolvePage(pathname) {
  const slug = pathname.replace(/\/+$/, '').split('/').pop().replace(/\.php$/i, '').toLowerCase();
  if (!slug || slug === 'index') return { kind: 'home' };
  if (slug === 'important-dates') return { kind: 'page', slug: 'schedule', page: pageData.schedule };
  if (pageComponents[slug]) return { kind: 'page', slug, page: pageData[slug] };
  return { kind: 'not-found' };
}

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem('symhealth-theme') === 'dark' ? 'dark' : 'light');
  const currentPage = resolvePage(location.pathname);
  const PageComponent = pageComponents[currentPage.slug];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('symhealth-theme', theme);
  }, [theme]);

  useEffect(() => {
    const title = currentPage.kind === 'page' ? currentPage.page.title : currentPage.kind === 'home' ? 'National Conference on Smart Healthcare' : 'Page Not Found';
    document.title = `${title} | SYMHEALTH 2026`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div id="top" className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Suspense fallback={<div className="container page-loading" role="status">Loading page…</div>}>
          {currentPage.kind === 'home' && <HomePage />}
          {currentPage.kind === 'page' && <PageComponent />}
          {currentPage.kind === 'not-found' && <NotFound />}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

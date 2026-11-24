import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../images/symbiosis-logo.png';
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

const localPages = [
  { title: 'Home', path: '/' },
  ...Object.entries(pageData).map(([slug, page]) => ({ title: page.title, path: `/${slug}` })),
];

const navigationByLabel = new Map(navigation.map((item) => [item.label, item]));
const participateNavigation = {
  label: 'Participate',
  children: [
    { label: 'Registration', description: 'Fees, categories, how to register', to: '/registration-fees' },
    { label: 'Sponsorship', description: 'Packages and benefits', to: '/associates' },
    { label: 'Contact us', description: 'Queries and support', to: '/contact-us' },
  ],
};
const homeNavigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  navigationByLabel.get('SYMHEALTH 2026'),
  { label: 'Speakers', to: '/speaker_profile' },
  { label: 'Papers', to: '/call_for_papers' },
  participateNavigation,
];
const compactNavigation = [
  ...homeNavigation.slice(0, 2),
  ...homeNavigation.slice(3),
  navigationByLabel.get('Reports'),
  navigationByLabel.get('Gallery'),
];

function NavigationItems({ items, id, pathname }) {
  return (
    <ul id={id} className="nav-list">
      {items.map((item) => (
        <li className="nav-item" key={item.label}>
          {item.children ? (
            <details className="nav-dropdown">
              <summary>{item.label}<span className="chevron" aria-hidden="true">⌄</span></summary>
              <ul className="dropdown-list">
                {item.children.map((child) => (
                  <li key={child.label}>
                    <SmartLink to={child.to}>
                      <span>{child.label}</span>
                      {child.description && <small>{child.description}</small>}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </details>
          ) : (
            <SmartLink to={item.to} aria-current={pathname === item.to ? 'page' : undefined}>{item.label}</SmartLink>
          )}
        </li>
      ))}
    </ul>
  );
}

function Header({ theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname.toLowerCase() === '/index.php';

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

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

  useEffect(() => {
    if (!searchOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [searchOpen]);

  if (isHome) {
    return (
      <div className={`home-header-shell${isScrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-open' : ''}`}>
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
              <NavigationItems items={homeNavigation} id="home-top-navigation" pathname={location.pathname} />
            </nav>
            <div className="header-actions home-header-actions">
              <button className="icon-button" type="button" aria-label="Search this website" onClick={() => setSearchOpen(true)}>
                <span aria-hidden="true">⌕</span>
              </button>
              <button className="icon-button theme-toggle" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={onThemeChange}>
                <span aria-hidden="true">{theme === 'dark' ? '☼' : '◐'}</span>
              </button>
              <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="home-top-navigation" onClick={() => setMenuOpen((open) => !open)}>
                <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span> <span>{menuOpen ? 'Close' : 'Menu'}</span>
              </button>
            </div>
          </div>
        </header>
        <nav className="compact-home-nav" aria-label="Conference navigation">
          <div className="container compact-home-inner">
            <SmartLink to="/" className="compact-event-brand" aria-label="SYMHEALTH 2026 home">
              <img src={eventLogo} alt="" />
              <strong>SYMHEALTH <span>2026</span></strong>
            </SmartLink>
            <div className="compact-home-links">
              <NavigationItems items={compactNavigation} id="compact-home-navigation" pathname={location.pathname} />
            </div>
            <a href="#highlights" className="highlights-link">View highlights</a>
            <button className="menu-toggle compact-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="compact-home-navigation" onClick={() => setMenuOpen((open) => !open)}>
              <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span> <span>{menuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </nav>
        {searchOpen && <SearchDialog onClose={() => setSearchOpen(false)} />}
      </div>
    );
  }

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Symbiosis International (Deemed University)</span>
          <div className="utility-links">
            <span>17–18 April 2026 <i aria-hidden="true">·</i> Lavale, Pune</span>
            <a href="mailto:symhealthregistration@siu.edu.in">symhealthregistration@siu.edu.in</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <SmartLink to="/" className="university-brand" aria-label="SYMHEALTH 2026 home">
            <img src={logo} alt="Symbiosis International (Deemed University)" />
          </SmartLink>
          <SmartLink to="/" className="event-brand" aria-label="SYMHEALTH 2026 home">
            <img src={eventLogo} alt="" />
            <span className="event-brand-copy">
              <strong>SYMHEALTH <span>2026</span></strong>
              <small>SMART HEALTHCARE · LAVALE, PUNE</small>
            </span>
          </SmartLink>
          <div className="header-actions">
            <SmartLink to="/contact-us" className="header-contact">Contact us <span aria-hidden="true">↗</span></SmartLink>
            <button className="icon-button" type="button" aria-label="Search this website" onClick={() => setSearchOpen(true)}>
              <span aria-hidden="true">⌕</span>
            </button>
            <button className="icon-button theme-toggle" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={onThemeChange}>
              <span aria-hidden="true">{theme === 'dark' ? '☼' : '◐'}</span>
            </button>
            <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
              <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span> <span>{menuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>
      </header>
      <nav className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        <div className="container nav-inner">
          <NavigationItems items={navigation} id="primary-navigation" pathname={location.pathname} />
        </div>
      </nav>
      {searchOpen && <SearchDialog onClose={() => setSearchOpen(false)} />}
    </>
  );
}

function SearchDialog({ onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const matches = localPages.filter((page) => page.title.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 8);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="search-dialog" role="dialog" aria-modal="true" aria-labelledby="search-title">
        <div className="dialog-heading">
          <div><span className="eyebrow">Explore</span><h2 id="search-title">Search the site</h2></div>
          <button className="icon-button" type="button" aria-label="Close search" onClick={onClose}>×</button>
        </div>
        <label className="search-field">
          <span className="sr-only">Search pages</span>
          <span aria-hidden="true">⌕</span>
          <input ref={inputRef} type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “registration” or “venue”" />
          <kbd>ESC</kbd>
        </label>
        <div className="search-results">
          {matches.length ? matches.map((page) => (
            <SmartLink to={page.path} key={page.path} onClick={onClose}>
              <span>{page.title}</span><span aria-hidden="true">↗</span>
            </SmartLink>
          )) : <p className="empty-result">No pages match “{query}”. Try another search.</p>}
        </div>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <SmartLink to="/" className="footer-brand"><span className="event-mark">S</span> SYMHEALTH 2026</SmartLink>
          <p>A national conference on embracing smart healthcare: predictive, precision and personalized health systems.</p>
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
          <a href="mailto:symhealthregistration@siu.edu.in">symhealthregistration@siu.edu.in</a>
          <p className="footer-hours">Contact hours: 9 am to 4 pm IST</p>
        </div>
        <div>
          <h2>Explore</h2>
          <SmartLink to="/call_for_papers">Call for Papers</SmartLink>
          <SmartLink to="/registration-fees">Registration</SmartLink>
          <SmartLink to="/about-pune">About Pune</SmartLink>
          <a href="https://www.facebook.com/Symhealth/" target="_blank" rel="noopener noreferrer">Facebook ↗</a>
          <a href="https://twitter.com/SymHealth2018" target="_blank" rel="noopener noreferrer">Twitter ↗</a>
          <a href="https://www.youtube.com/channel/UCkQbCp7hvJnTl3N6KkuSzoQ" target="_blank" rel="noopener noreferrer">YouTube ↗</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
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
      <Header theme={theme} onThemeChange={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')} />
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

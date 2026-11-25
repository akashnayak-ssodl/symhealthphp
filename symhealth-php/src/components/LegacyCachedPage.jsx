import PageContent from './PageContent.jsx';
import { useState } from 'react';
import { pageData, sourceBase } from '../data.js';

const localRoutes = new Set([
  'about-pune',
  'about-symbiosis',
  'about',
  'abstract-submission',
  'associates',
  'call_for_papers',
  'concept',
  'contact-us',
  'faq',
  'fhbs',
  'how-to-reach',
  'index',
  'logos',
  'media-partners',
  'messages',
  'photos',
  'registration-fees',
  'registration-guidelines',
  'schedule',
  'speaker_profile',
  'topics',
  'venue',
  'videos',
  'where-to-stay',
]);

function extractSafeContent(source) {
  const document = new DOMParser().parseFromString(source, 'text/html');
  document.querySelectorAll('script, style, noscript, link, meta, nav, header, footer, button, object, embed').forEach((node) => node.remove());
  document.querySelectorAll('[class], [id]').forEach((node) => {
    const names = `${node.className || ''} ${node.id || ''}`.toLowerCase();
    if (/(navbar|footer|preloader|topbar|breadcrumb|scroll-top|back-to-top|cookie|social-icon)/.test(names)) node.remove();
  });

  const root = document.querySelector('main, #content, #main, .main-content') || document.body;
  root.querySelectorAll('*').forEach((element) => {
    for (const attribute of [...element.attributes]) {
      if (attribute.name.toLowerCase().startsWith('on')) element.removeAttribute(attribute.name);
    }

    if (element.matches('img')) {
      const sourcePath = element.getAttribute('data-src') || element.getAttribute('data-lazy-src') || element.getAttribute('src');
      if (sourcePath) {
        const imageUrl = new URL(sourcePath, sourceBase);
        if (imageUrl.hostname === new URL(sourceBase).hostname && imageUrl.pathname.startsWith('/assets/')) {
          const localPath = imageUrl.pathname
            .split('/')
            .filter(Boolean)
            .map((segment) => decodeURIComponent(segment).replace(/[<>:"|?*]/g, '_'))
            .join('/');
          element.setAttribute('src', `/site-assets/${localPath}`);
        } else if (imageUrl.protocol === 'http:' || imageUrl.protocol === 'https:') element.setAttribute('src', imageUrl.href);
        else element.removeAttribute('src');
      }
      element.removeAttribute('srcset');
      element.removeAttribute('data-src');
      element.removeAttribute('data-lazy-src');
      element.loading = 'lazy';
      if (!element.hasAttribute('alt')) element.setAttribute('alt', '');
    }

    if (element.matches('a[href]')) {
      const href = element.getAttribute('href').trim();
      if (/^(mailto:|tel:)/i.test(href) || href.startsWith('#')) {
        return;
      }
      if (/^[a-z][a-z\d+.-]*:/i.test(href) && !/^https?:/i.test(href)) {
        element.removeAttribute('href');
      } else {
        const url = new URL(href, sourceBase);
        const slug = url.pathname.split('/').pop().replace(/\.php$/i, '').toLowerCase();
        if (url.hostname === new URL(sourceBase).hostname && localRoutes.has(slug)) {
          element.setAttribute('href', slug === 'index' ? '/' : `/${slug}`);
        } else if (url.protocol === 'http:' || url.protocol === 'https:') {
          element.setAttribute('href', url.href);
          element.setAttribute('target', '_blank');
          element.setAttribute('rel', 'noopener noreferrer');
        }
      }
    }

    if (element.matches('iframe')) {
      const url = new URL(element.getAttribute('src') || '', sourceBase);
      const allowedHost = /^(www\.)?(youtube\.com|youtube-nocookie\.com|player\.vimeo\.com|google\.com|maps\.google\.com)$/i.test(url.hostname);
      if (url.protocol !== 'https:' || !allowedHost || (url.hostname.endsWith('google.com') && !url.pathname.startsWith('/maps'))) {
        element.remove();
      } else {
        element.setAttribute('src', url.href);
        element.setAttribute('loading', 'lazy');
        element.removeAttribute('width');
        element.removeAttribute('height');
      }
    }

    if (element.matches('form')) {
      element.removeAttribute('action');
      element.removeAttribute('method');
    }
  });

  return root.innerHTML;
}

export default function LegacyCachedPage({ slug, html }) {
  const [formStatus, setFormStatus] = useState('');
  const page = pageData[slug];
  const content = extractSafeContent(html);

  return (
    <PageContent slug={slug} page={{ ...page, sections: [] }}>
      <div className="legacy-content" onSubmit={(event) => { event.preventDefault(); setFormStatus('This archived form is no longer active. Please contact the conference team by email.'); }} dangerouslySetInnerHTML={{ __html: content }} />
      {formStatus && <p className="legacy-form-status" role="status">{formStatus}</p>}
    </PageContent>
  );
}

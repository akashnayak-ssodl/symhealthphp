import PageContent from '../components/PageContent.jsx';
import { assetBase, pageData } from '../data.js';
import SmartLink from '../components/SmartLink.jsx';

const associates = [
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

export default function Associates() {
  return (
    <PageContent slug="associates" page={{ ...pageData.associates, sections: [] }}>
      <section className="legacy-associates">
        <h2>Our past associates</h2>
        <p>A selection of organizations featured among SYMHEALTH&apos;s past associates. Their collaboration has helped bring healthcare leaders and ideas together.</p>
        <div className="legacy-associate-grid">
          {associates.map(([name, image]) => (
            <figure className="legacy-associate" key={name}>
              <img src={`${assetBase}associate/${encodeURIComponent(image)}`} alt={name} loading="lazy" />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
        <p className="legacy-note">These are past associates, not a confirmation of current SYMHEALTH 2026 sponsorship or partnership.</p>
        <SmartLink to="/contact-us" className="text-link">Interested in connecting with us? Contact the team <span aria-hidden="true">↗</span></SmartLink>
      </section>
    </PageContent>
  );
}

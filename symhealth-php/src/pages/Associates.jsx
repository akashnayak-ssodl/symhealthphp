import PageContent from '../components/PageContent.jsx';
import { associateLogos, imageBase, pageData } from '../data.js';
import SmartLink from '../components/SmartLink.jsx';

export default function Associates() {
  return (
    <PageContent slug="associates" page={{ ...pageData.associates, sections: [] }}>
      <section className="legacy-associates">
        <h2>Our past associates</h2>
        <p>A selection of organizations featured among SYMHEALTH&apos;s past associates. Their collaboration has helped bring healthcare leaders and ideas together.</p>
        <div className="legacy-associate-grid">
          {associateLogos.map(([name, image]) => (
            <figure className="legacy-associate" key={name}>
              <img src={`${imageBase}associate/${encodeURIComponent(image)}`} alt={name} loading="lazy" />
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

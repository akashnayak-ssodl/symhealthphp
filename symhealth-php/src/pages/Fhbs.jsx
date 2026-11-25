import PageContent from '../components/PageContent.jsx';
import { imageBase, pageData } from '../data.js';
import SmartLink from '../components/SmartLink.jsx';

const focusAreas = [
  ['01', 'Healthcare education', 'Responding to the growing concern of healthcare education across the world.'],
  ['02', 'Healthcare management', 'Recognizing the importance of healthcare management in a changing world.'],
  ['03', 'A growing industry', 'Engaging with the needs of a rapidly growing healthcare industry.'],
];

export default function Fhbs() {
  return (
    <PageContent slug="fhbs" page={{ ...pageData.fhbs, sections: [] }}>
      <section className="legacy-faculty">
        <figure>
          <img src={`${imageBase}SIU%20building.jpg`} alt="Symbiosis International University campus at Lavale" loading="lazy" />
          <figcaption>Symbiosis International University · Lavale, Pune</figcaption>
        </figure>
        <div>
          <h2>Responding to a changing healthcare landscape.</h2>
          <p>The Faculty of Medical and Health Sciences is a conscious response to the growing concern of healthcare education and management across the world and the rapidly growing healthcare industry.</p>
          <p>FoMHS works towards creating health momentum, with the ultimate objective of creating a healthy world.</p>
          <strong>Creating a health momentum towards the ultimate objective of a healthy world.</strong>
        </div>
      </section>
      <section className="legacy-focus">
        <h2>Responding to today’s needs</h2>
        <p>FoMHS brings attention to the challenges and opportunities shaping healthcare around the world.</p>
        <div className="legacy-focus-grid">
          {focusAreas.map(([number, title, description]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>
      <SmartLink to="https://siu.edu.in/higher-education-india/best-biomedical-research-colleges-india.php" className="text-link">Explore FoMHS on SIU.edu.in <span aria-hidden="true">↗</span></SmartLink>
    </PageContent>
  );
}

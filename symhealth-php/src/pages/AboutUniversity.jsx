import { campusPhotos } from '../data.js';
import { PageHero } from '../components/PageContent.jsx';
import SmartLink from '../components/SmartLink.jsx';

const universityFacts = [
  { value: '1971', label: 'Year established' },
  { value: '4', label: 'States with campuses' },
  { value: '6', label: 'Cities across India' },
  { value: '85+', label: 'Countries represented' },
];

export default function AboutUniversity() {
  return (
    <>
      <PageHero title="Symbiosis International University" />
      <div className="about-university-page">
        <div className="container">
          <section className="about-university-feature" aria-labelledby="about-university-heading">
            <div className="about-university-copy">
              <span className="eyebrow">THE HOST UNIVERSITY</span>
              <h2 id="about-university-heading">A learning community shaped by global perspectives.</h2>
              <p>
                Symbiosis International (Deemed University) is a multidisciplinary university
                built around a vibrant, multicultural learning environment. Founded in 1971,
                it welcomes students and faculty from across India and the world.
              </p>
              <p>
                Its campuses reflect a shared vision: promoting international understanding
                through quality education. The Lavale campus in Pune is the host setting for
                SYMHEALTH 2026.
              </p>
              <a className="text-link" href="https://www.siu.edu.in/" target="_blank" rel="noopener noreferrer">
                Explore the university <span aria-hidden="true">↗</span>
              </a>
            </div>
            <figure className="about-university-photo">
              <img src={campusPhotos[0].src} alt={campusPhotos[0].alt} loading="lazy" />
              <figcaption>
                <span>THE SETTING FOR SYMHEALTH 2026</span>
                <strong>Lavale, Pune</strong>
              </figcaption>
            </figure>
          </section>

          <section className="university-facts" aria-labelledby="university-facts-heading">
            <div className="university-facts-heading">
              <span className="eyebrow">A WIDE-REACHING COMMUNITY</span>
              <h2 id="university-facts-heading">Rooted in India, open to the world.</h2>
            </div>
            <div className="university-facts-grid">
              {universityFacts.map((fact) => (
                <div className="university-fact" key={fact.label}>
                  <strong>{fact.value}</strong>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="university-purpose">
            <span className="university-purpose-mark" aria-hidden="true">“</span>
            <div>
              <span className="eyebrow">THE SYMBIOSIS VISION</span>
              <h2>Promoting international understanding through quality education.</h2>
              <p>
                Inspired by the idea of “World as One Family,” the university brings together
                people and perspectives in a community of learning.
              </p>
            </div>
          </section>

          <section className="conference-overview" aria-labelledby="conference-overview-heading">
            <div className="conference-overview-intro">
              <span className="eyebrow">ABOUT SYMHEALTH</span>
              <h2 id="conference-overview-heading">Smarter healthcare for healthier generations.</h2>
              <p>
                Hosted by Symbiosis International (Deemed University) at its Lavale campus,
                SYMHEALTH 2026 brought the healthcare community together on 17–18 April 2026.
                Its theme explored predictive, precision and personalized health systems as
                part of a pathway toward the health-related Sustainable Development Goals.
              </p>
              <div className="conference-reach">
                <div><strong>25 years</strong><span>of conference legacy</span></div>
                <div><strong>1,400+</strong><span>delegates from across healthcare</span></div>
              </div>
              <a className="text-link" href="https://symhealth.siu.edu.in/about" target="_blank" rel="noopener noreferrer">
                Visit the official SYMHEALTH page <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="conference-overview-grid">
              <article>
                <span>01 <i aria-hidden="true">/</i> WHO ATTENDS</span>
                <h3>A broad healthcare community</h3>
                <p>
                  Doctors, medico-legal experts, insurance and technology professionals,
                  NGOs, hospital administrators, clinical researchers and public-sector
                  representatives from India and abroad.
                </p>
              </article>
              <article>
                <span>02 <i aria-hidden="true">/</i> WHAT IT OFFERS</span>
                <h3>Ideas, learning and collaboration</h3>
                <p>
                  Speaker sessions, current healthcare topics, paper presentations,
                  masterclasses, professional development and opportunities to connect.
                </p>
              </article>
            </div>
          </section>

          <section className="about-university-links" aria-labelledby="university-links-heading">
            <div>
              <span className="eyebrow">EXPLORE FURTHER</span>
              <h2 id="university-links-heading">Get to know the campus and the conference.</h2>
            </div>
            <div className="about-university-actions">
              <SmartLink className="button button-light" to="/venue">Explore the venue <span aria-hidden="true">→</span></SmartLink>
              <SmartLink className="button button-outline" to="/about-symbiosis">About Symbiosis <span aria-hidden="true">→</span></SmartLink>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

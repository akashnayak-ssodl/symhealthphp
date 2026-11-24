import { assetBase } from '../data.js';
import { PageHero } from '../components/PageContent.jsx';

const campuses = [
  { name: 'Senapati Bapat Road', city: 'Pune', image: 'symbiosis-society-banner.jpg' },
  { name: 'Lavale', city: 'Pune', image: 'SIU%20lavale2.jpg' },
  { name: 'Hinjewadi', city: 'Pune', image: 'SIIB.jpg' },
  { name: 'Viman Nagar', city: 'Pune', image: 'viman-nagar-campus-banner.jpg' },
  { name: 'Model Colony', city: 'Pune', image: 'atur-centre-banner.jpg' },
  { name: 'Khadki', city: 'Pune', image: 'kirkee-campus-banner.jpg' },
  { name: 'Electronics City', city: 'Bengaluru', image: 'bengaluru-banner.jpg' },
  { name: 'Sector 62', city: 'Noida', image: 'noida-campus-banner.jpg' },
  { name: 'New CIDCO', city: 'Nashik', image: 'nashik-campus-banner.jpg' },
  { name: 'Kothur Mandal', city: 'Hyderabad', image: 'hyderabad-campus-banner.jpg' },
];

export default function AboutSymbiosis() {
  return (
    <>
      <PageHero title="About Symbiosis" />
      <div className="page-content symbiosis-page">
        <div className="container">
          <section className="symbiosis-intro">
            <div>
              <span className="eyebrow">Symbiosis International</span>
              <h2>Symbiosis: A saga of excellence</h2>
              <p className="symbiosis-motto"><strong>“Vasudhaiva Kutumbakkam”</strong> means “The world is one family.”</p>
            </div>
            <img className="symbiosis-emblem" src={`${assetBase}one-world-img.png`} alt="The world is one family" loading="lazy" />
          </section>

          <div className="symbiosis-stats" aria-label="Symbiosis at a glance">
            <div><strong>46</strong><span>academic institutions</span></div>
            <div><strong>40+</strong><span>years of quality education</span></div>
            <div><strong>27,000+</strong><span>Indian and international students</span></div>
          </div>

          <p className="symbiosis-vision">
            These campuses epitomize the Symbiosis vision of <strong>“Promoting International Understanding through Quality Education.”</strong> They bring international students into Indian culture and hospitality, with many residential campuses offering recreational facilities, swimming pools, amphitheatres and health care centres. In 2002, the Ministry of Human Resource Development conferred Deemed-to-be University status on Symbiosis.
          </p>

          <section className="symbiosis-founder" aria-labelledby="symbiosis-founder-title">
            <div>
              <span className="eyebrow">Our founder</span>
              <h2 id="symbiosis-founder-title">Dr. S. B. Mujumdar</h2>
              <p>Inspired by the ideals of Vishwa Bharati of Gurudev Rabindranath Tagore and Antar Bharati of Sane Guruji, and with a deep desire to help foreign students, Dr. S. B. Mujumdar conceived Symbiosis in 1971. Its motto, “Vasudhaiva Kutumbakam,” reflects the idea of Pune becoming a “home away from home” for international students.</p>
              <p>Symbiosis comprises 46 institutes across diverse disciplines, with students from every Indian state and more than 85 countries. It is a multicultural, multilingual community where academic democracy prevails, law is respected, freedom of thought and expression is encouraged, and equality, innovation, passion and compassion are nurtured.</p>
              <a className="text-link" href="https://siu.edu.in/about-founder.php" target="_blank" rel="noopener noreferrer">Read more about the founder <span aria-hidden="true">↗</span></a>
            </div>
            <figure>
              <img src={`${assetBase}president.jpg`} alt="Dr. S. B. Mujumdar" loading="lazy" />
              <figcaption>Founder &amp; President, Symbiosis</figcaption>
            </figure>
          </section>

          <section className="symbiosis-campuses" aria-labelledby="symbiosis-campuses-title">
            <div className="section-heading">
              <div><span className="eyebrow">Across India</span><h2 id="symbiosis-campuses-title">Symbiosis campuses</h2></div>
              <p>From Pune to Bengaluru, Noida, Nashik and Hyderabad.</p>
            </div>
            <div className="symbiosis-campus-grid">
              {campuses.map((campus) => (
                <figure className="symbiosis-campus-card" key={`${campus.city}-${campus.name}`}>
                  <img src={`${assetBase}${campus.image}`} alt={`${campus.name} campus, ${campus.city}`} loading="lazy" />
                  <figcaption><span>{campus.city}</span><strong>{campus.name}</strong></figcaption>
                </figure>
              ))}
            </div>
            <a className="text-link" href="https://www.siu.edu.in/about-us.php" target="_blank" rel="noopener noreferrer">Learn more about Symbiosis <span aria-hidden="true">↗</span></a>
          </section>
        </div>
      </div>
    </>
  );
}

import { associateLogos, imageBase } from '../data.js';

export default function PartnerCarousel() {
  return (
    <div className="partner-marquee" role="region" aria-label="SYMHEALTH partner logos" tabIndex="0">
      <div className="partner-track">
        {[false, true].map((duplicate) => (
          <div className="partner-set" key={String(duplicate)} aria-hidden={duplicate || undefined}>
            {associateLogos.map(([name, filename]) => (
              <figure className="partner-logo" key={name}>
                <img
                  src={`${imageBase}associate/${encodeURIComponent(filename)}`}
                  alt={duplicate ? '' : name}
                  loading="lazy"
                />
                <figcaption>{name}</figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

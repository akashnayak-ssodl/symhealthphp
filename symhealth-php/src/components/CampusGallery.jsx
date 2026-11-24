import { useEffect, useState } from 'react';
import { campusPhotos } from '../data.js';

export default function CampusGallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected === null) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'ArrowRight') setSelected((current) => (current + 1) % campusPhotos.length);
      if (event.key === 'ArrowLeft') setSelected((current) => (current - 1 + campusPhotos.length) % campusPhotos.length);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selected]);

  return (
    <>
      <div className="campus-gallery">
        {campusPhotos.map((photo, index) => (
          <button className={`gallery-tile gallery-tile-${index + 1}`} type="button" key={photo.src} onClick={() => setSelected(index)} aria-label={`View photo: ${photo.alt}`}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <span>0{index + 1}<span aria-hidden="true">↗</span></span>
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className="lightbox" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
          <div className="lightbox-panel" role="dialog" aria-modal="true" aria-label="Campus photo viewer">
            <button className="lightbox-close" type="button" aria-label="Close photo viewer" onClick={() => setSelected(null)}>×</button>
            <button className="lightbox-arrow previous" type="button" aria-label="Previous photo" onClick={() => setSelected((selected - 1 + campusPhotos.length) % campusPhotos.length)}>←</button>
            <img src={campusPhotos[selected].src} alt={campusPhotos[selected].alt} />
            <button className="lightbox-arrow next" type="button" aria-label="Next photo" onClick={() => setSelected((selected + 1) % campusPhotos.length)}>→</button>
            <p>{campusPhotos[selected].alt} <span>{selected + 1} / {campusPhotos.length}</span></p>
          </div>
        </div>
      )}
    </>
  );
}

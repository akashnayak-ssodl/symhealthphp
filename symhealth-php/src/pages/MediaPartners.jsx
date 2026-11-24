import PageContent from '../components/PageContent.jsx';
import { assetBase, pageData } from '../data.js';
import SmartLink from '../components/SmartLink.jsx';

export default function MediaPartners() {
  return (
    <PageContent slug="media-partners" page={{ ...pageData['media-partners'], sections: [] }}>
      <img className="partner-logos" src={`${assetBase}images/brands.jpg`} alt="SYMHEALTH media partner and associate logos" loading="lazy" />
      <p className="legacy-note">For media partnership information, archived press material or permissions, contact the conference team.</p>
      <SmartLink to="mailto:symhealthregistration@siu.edu.in" className="text-link">Email the conference team <span aria-hidden="true">↗</span></SmartLink>
    </PageContent>
  );
}

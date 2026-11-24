import { pageData } from '../data.js';
import PageContent from '../components/PageContent.jsx';

export default function GenericPage({ slug }) {
  const page = pageData[slug];
  return <PageContent slug={slug} page={page} />;
}

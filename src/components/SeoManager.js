import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from './themetype';
import { getSeoPayload } from '../seo/seoConfig';

const upsertMetaTag = ({ attr, key, content }) => {
  if (!content) return;

  const selector = `meta[${attr}="${key}"]`;
  let metaTag = document.head.querySelector(selector);

  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute(attr, key);
    document.head.appendChild(metaTag);
  }

  metaTag.setAttribute('content', content);
};

const upsertLinkTag = ({ rel, href }) => {
  if (!href) return;

  const selector = `link[rel="${rel}"]`;
  let linkTag = document.head.querySelector(selector);

  if (!linkTag) {
    linkTag = document.createElement('link');
    linkTag.setAttribute('rel', rel);
    document.head.appendChild(linkTag);
  }

  linkTag.setAttribute('href', href);
};

const applyStructuredData = structuredData => {
  const managedScripts = document.head.querySelectorAll(
    'script[data-seo-managed="true"]'
  );
  managedScripts.forEach(script => script.remove());

  structuredData.forEach((schema, index) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoManaged = 'true';
    script.dataset.seoSchemaIndex = String(index);
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  });
};

function SeoManager() {
  const location = useLocation();
  const { datatoShow } = useTheme();

  useEffect(() => {
    const seoData = getSeoPayload({
      pathname: location.pathname,
      datatoShow,
    });

    document.title = seoData.title;
    document.documentElement.lang = seoData.language;

    upsertMetaTag({
      attr: 'name',
      key: 'description',
      content: seoData.description,
    });
    upsertMetaTag({
      attr: 'name',
      key: 'keywords',
      content: seoData.keywords,
    });
    upsertMetaTag({
      attr: 'name',
      key: 'author',
      content: 'Pablo Italo',
    });
    upsertMetaTag({
      attr: 'name',
      key: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    });
    upsertMetaTag({
      attr: 'name',
      key: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMetaTag({
      attr: 'name',
      key: 'twitter:title',
      content: seoData.title,
    });
    upsertMetaTag({
      attr: 'name',
      key: 'twitter:description',
      content: seoData.description,
    });
    upsertMetaTag({
      attr: 'name',
      key: 'twitter:image',
      content: seoData.imageUrl,
    });
    upsertMetaTag({
      attr: 'property',
      key: 'og:title',
      content: seoData.title,
    });
    upsertMetaTag({
      attr: 'property',
      key: 'og:description',
      content: seoData.description,
    });
    upsertMetaTag({
      attr: 'property',
      key: 'og:type',
      content: 'website',
    });
    upsertMetaTag({
      attr: 'property',
      key: 'og:url',
      content: seoData.canonicalUrl,
    });
    upsertMetaTag({
      attr: 'property',
      key: 'og:image',
      content: seoData.imageUrl,
    });
    upsertMetaTag({
      attr: 'property',
      key: 'og:locale',
      content: seoData.locale,
    });
    upsertMetaTag({
      attr: 'property',
      key: 'og:site_name',
      content: 'Pablo Italo',
    });
    upsertLinkTag({
      rel: 'canonical',
      href: seoData.canonicalUrl,
    });
    applyStructuredData(seoData.structuredData);
  }, [location.pathname, datatoShow]);

  return null;
}

export default SeoManager;

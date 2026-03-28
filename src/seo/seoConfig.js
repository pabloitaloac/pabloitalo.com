const SITE_URL = 'https://pabloitalo.com';
const DEFAULT_IMAGE_PATH = '/media/pre.svg';

const truncate = (value, maxLength = 160) => {
  if (!value) return '';
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1).trim()}…`;
};

const normalizePath = pathname => {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
};

const getRouteContent = (pathname, datatoShow) => {
  const cleanPath = normalizePath(pathname);
  const projectHighlights = (datatoShow?.projects || [])
    .filter(project => project.highlight)
    .slice(0, 3)
    .map(project => project.projects_show)
    .join(', ');

  const contentByPath = {
    '/': {
      title: `Pablo Italo | ${datatoShow?.home3 || ''}`.trim(),
      description: truncate(
        datatoShow?.home7 ||
          'Senior Software Engineer, Fractional CTO, Tech Lead and AI Specialist.'
      ),
    },
    '/home': {
      title: `Home | Pablo Italo | ${datatoShow?.home3 || ''}`.trim(),
      description: truncate(
        datatoShow?.home7 ||
          'Senior Software Engineer, Fractional CTO, Tech Lead and AI Specialist.'
      ),
    },
    '/about': {
      title: `About | Pablo Italo`,
      description: truncate(
        datatoShow?.about10 ||
          datatoShow?.about8 ||
          'Professional profile and technical expertise.'
      ),
    },
    '/project': {
      title: `Projects | Pablo Italo`,
      description: truncate(
        datatoShow?.projects3
          ? `${datatoShow.projects3} ${projectHighlights}`.trim()
          : `Projects by Pablo Italo. ${projectHighlights}`.trim()
      ),
    },
    '/resume': {
      title: `Resume | Pablo Italo`,
      description: truncate(
        `${datatoShow?.resume1 || 'Resume'} - ${datatoShow?.home3 || ''}`.trim()
      ),
    },
  };

  return contentByPath[cleanPath] || contentByPath['/'];
};

const buildStructuredData = ({ pathname, datatoShow, canonicalUrl, imageUrl }) => {
  const cleanPath = normalizePath(pathname);
  const language = datatoShow?.language === 'BR' ? 'pt-BR' : 'en';

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pablo Italo',
    url: SITE_URL,
    inLanguage: language,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/project`,
      'query-input': 'required name=search_term_string',
    },
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pablo Italo',
    url: SITE_URL,
    image: imageUrl,
    jobTitle:
      datatoShow?.home3 ||
      'Senior Software Engineer | Fractional CTO | Tech Lead | AI Specialist',
    description: truncate(datatoShow?.home7),
    sameAs: [
      'https://github.com/pabloitaloac',
      'https://www.linkedin.com/in/pablo-italo/',
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: canonicalUrl,
    name: getRouteContent(cleanPath, datatoShow).title,
    description: getRouteContent(cleanPath, datatoShow).description,
    inLanguage: language,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE_URL,
      name: 'Pablo Italo',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      ...(cleanPath !== '/'
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: getRouteContent(cleanPath, datatoShow).title,
              item: canonicalUrl,
            },
          ]
        : []),
    ],
  };

  const projectsSchema =
    cleanPath === '/project' && Array.isArray(datatoShow?.projects)
      ? {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Pablo Italo Projects',
          itemListElement: datatoShow.projects.slice(0, 10).map((project, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'CreativeWork',
              name: project.projects_show,
              description: truncate(project.projects_show_1, 180),
              url: project.projects_show_LiveLink || `${SITE_URL}/project`,
            },
          })),
        }
      : null;

  return [websiteSchema, personSchema, webPageSchema, breadcrumbSchema, projectsSchema].filter(
    Boolean
  );
};

export const getSeoPayload = ({ pathname, datatoShow }) => {
  const cleanPath = normalizePath(pathname);
  const locale = datatoShow?.language === 'BR' ? 'pt_BR' : 'en_US';
  const language = datatoShow?.language === 'BR' ? 'pt-BR' : 'en';
  const canonicalUrl =
    cleanPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${cleanPath}`;
  const imageUrl = `${SITE_URL}${DEFAULT_IMAGE_PATH}`;
  const routeContent = getRouteContent(cleanPath, datatoShow);

  const keywords = [
    'Pablo Italo',
    datatoShow?.home3,
    datatoShow?.home9,
    datatoShow?.about8,
  ]
    .filter(Boolean)
    .join(', ');

  return {
    title: routeContent.title,
    description: routeContent.description,
    canonicalUrl,
    imageUrl,
    keywords,
    locale,
    language,
    structuredData: buildStructuredData({
      pathname: cleanPath,
      datatoShow,
      canonicalUrl,
      imageUrl,
    }),
  };
};

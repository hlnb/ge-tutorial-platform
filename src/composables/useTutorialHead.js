import { useHead } from '@vueuse/head';

const SITE_URL = 'https://www.graphitedge.com.au';

export function useTutorialHead({ title, description, path }) {
  const fullUrl = `${SITE_URL}${path}`;
  const fullTitle = `${title} – GraphiteEdge`;

  useHead({
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: fullUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
    ],
    link: [{ rel: 'canonical', href: fullUrl }],
  });
}

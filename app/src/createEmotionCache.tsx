import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

export default function createEmotionCache() {
  const cache = createCache({
    key: 'css',
    prepend: true,
    stylisPlugins: [prefixer],
  });
  cache.compat = true;
  return cache;
}
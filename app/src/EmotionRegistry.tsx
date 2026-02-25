'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';

const EmotionRegistry = ({ children }: { children: React.ReactNode }) => {
  const [emotionCache] = useState(() => createEmotionCache());

  useServerInsertedHTML(() => {
    const styles = emotionCache.inserted;
    if (Object.keys(styles).length === 0) return null;

    const emotionKey = `${emotionCache.key} ${Object.keys(styles).join(' ')}`;

    return (
      <style
        data-emotion={emotionKey}
        dangerouslySetInnerHTML={{ __html: Object.values(styles).join(' ') }}
      />
    );
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
};

export default EmotionRegistry;
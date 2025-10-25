// src/hooks/useScrollToComponent.ts
'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function useScrollToComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const componentId = searchParams.get('componentId');

  useEffect(() => {
    if (!searchParams.has('componentId')) {
      //console.log('❌ URL does not contain componentId');
      return;
    }
    const el = document.querySelector(`[data-component-id="${componentId}"]`);

    if (!el) {
      console.log(
        `❌ No element found with data-component-id="${componentId}"`,
      );

      router.push('/404');
    }

    // Smooth scroll to the component
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Optional: highlight the component briefly
    el?.classList.add('highlight-component');
    const timeout = setTimeout(
      () => el?.classList.remove('highlight-component'),
      1500,
    );

    return () => clearTimeout(timeout);
  }, [componentId]);
}

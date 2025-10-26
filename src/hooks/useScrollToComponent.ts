// useScrollToComponent.ts
'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

/**
 * Custom hook to scroll to a specific component on the page based on a 'componentId' in the URL query parameters.
 * It also handles cases where the component is not found or the 'componentId' is missing from the URL.
 */
export default function useScrollToComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const componentId = searchParams.get('componentId');

  useEffect(() => {
    // If no componentId is present in the URL, do nothing.
    if (!searchParams.has('componentId')) {
      //console.log('❌ URL does not contain componentId');
      return;
    }
    // Attempt to find the component using the data-component-id attribute.
    const el = document.querySelector(`[data-component-id="${componentId}"]`);

    // If no element is found, log an error (commented out) and redirect to a 404 page.
    if (!el) {
      /*console.log(
        `❌ No element found with data-component-id="${componentId}"`,
      );*/

      router.replace('/404');
      return;
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

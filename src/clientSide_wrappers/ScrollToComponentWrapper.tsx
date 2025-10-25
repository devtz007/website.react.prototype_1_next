'use client';

import useScrollToComponent from '@/hooks/useScrollToComponent';

export default function ScrollToComponentWrapper() {
  useScrollToComponent(); // automatically handles scrolling
  return null;
}

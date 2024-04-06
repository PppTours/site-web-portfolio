import { RefObject, useEffect, useState } from 'react';

/**
 * Hook to know when the window is resizing.
 * @returns {boolean} Whether the window is resizing.
 */
export default function useHeaderBottom(headerRef: RefObject<HTMLDivElement> | undefined): number {
  const [headerBottom, setHeaderBottom] = useState<number>(0);

  useEffect(() => {
    /**
     * Update header height.
     */
    function updateHeaderHeight(): void {
      const bottom = headerRef?.current?.getBoundingClientRect().bottom ?? 0;
      if (bottom !== headerBottom) setHeaderBottom(bottom), 200;
    }

    if (headerBottom === 0) updateHeaderHeight();

    window.addEventListener('scroll', updateHeaderHeight);

    return () => window.removeEventListener('scroll', updateHeaderHeight);
  }, [headerRef, headerBottom]);

  return headerBottom;
}

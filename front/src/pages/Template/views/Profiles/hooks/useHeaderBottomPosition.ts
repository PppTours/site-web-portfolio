import { RefObject, useEffect, useState } from 'react';

export default function useHeaderBottomPosition(
  headerRef: RefObject<HTMLDivElement> | undefined
): number {
  const [headerBottomPosition, setHeaderBottomPosition] = useState<number>(0);

  useEffect(() => {
    function initializeHeaderBottomPosition() {
      if (headerBottomPosition === 0) updateHeaderBottomPosition();
    }

    function updateHeaderBottomPosition(): void {
      const bottomPosition = headerRef?.current?.getBoundingClientRect().bottom ?? 0;
      if (bottomPosition !== headerBottomPosition) setHeaderBottomPosition(bottomPosition);
    }

    initializeHeaderBottomPosition();

    window.addEventListener('scroll', updateHeaderBottomPosition);

    return () => window.removeEventListener('scroll', updateHeaderBottomPosition);
  }, [headerRef, headerBottomPosition]);

  return headerBottomPosition;
}

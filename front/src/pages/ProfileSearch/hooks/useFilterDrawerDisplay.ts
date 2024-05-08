import { RefObject, useEffect, useRef, useState } from 'react';
import useWindowResizing from 'src/hooks/useWindowResizing';

interface FilterDrawerDisplayReturn {
  isFilterDrawerDisplayed: boolean;
  filterMenuRef: RefObject<HTMLDivElement>;
}

function useFilterDrawerDisplay(): FilterDrawerDisplayReturn {
  const isWindowResizing = useWindowResizing();
  const [isFilterDrawerDisplayed, setIsFilterDrawerDisplayed] = useState<boolean>(false);
  const filterMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateFilterDrawerDisplay(): void {
      const filterDisplay = filterMenuRef.current
        ? getComputedStyle(filterMenuRef.current).display
        : null;
      const areFiltersNotDisplayed = filterDisplay === 'none';
      setIsFilterDrawerDisplayed(areFiltersNotDisplayed);
    }

    if (!isWindowResizing) updateFilterDrawerDisplay();
  }, [filterMenuRef, isWindowResizing]);

  return { isFilterDrawerDisplayed, filterMenuRef };
}

export default useFilterDrawerDisplay;

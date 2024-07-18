import { useState } from 'react';

interface FilterDisplayReturn {
  areFiltersDisplayed: boolean;
  toggleFilterDisplay: () => void;
  closeFilterDrawer: () => void;
}

function useFilterDisplay(): FilterDisplayReturn {
  const [areFiltersDisplayed, setAreFiltersDisplayed] = useState<boolean>(false);

  function toggleFilterDisplay(): void {
    setAreFiltersDisplayed(!areFiltersDisplayed);
  }

  function closeFilterDrawer(): void {
    setAreFiltersDisplayed(false);
  }

  return {
    areFiltersDisplayed,
    toggleFilterDisplay,
    closeFilterDrawer
  };
}

export default useFilterDisplay;

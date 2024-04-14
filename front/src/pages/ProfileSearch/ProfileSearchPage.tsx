import './ProfileSearchPage.scss';

import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import useWindowResizing from 'src/hooks/useWindowResizing';
import { TemplateContext } from 'src/templates/Template';

import FilterDisplayToggleButton from './components/FilterDisplayToggleButton/FilterDisplayToggleButton';
import FilterDrawer from './components/FilterDrawer/FilterDrawer';
import FilterMenu from './components/FilterMenu/FilterMenu';
import ProfileGrid from './components/ProfileGrid/ProfileGrid';
import useHeaderBottomPosition from './hooks/useHeaderBottomPosition';

export default function ProfileSearchPage() {
  const { headerRef } = useContext(TemplateContext);
  const filterMenuRef = useRef<HTMLDivElement>(null);
  const [areFiltersDisplayed, setAreFiltersDisplayed] = useState<boolean>(false);
  const [isFilterDrawerDisplayed, setIsFilterDrawerDisplayed] = useState<boolean>(false);
  const headerBottomPosition = useHeaderBottomPosition(headerRef);
  const isWindowResizing = useWindowResizing();

  const toggleFilterDisplay = useCallback(
    (display: boolean) => setAreFiltersDisplayed(display),
    []
  );

  const closeFilterDrawer = useCallback(() => {
    setAreFiltersDisplayed(false);
  }, []);

  useEffect(() => {
    function updateFilterDrawerDisplay(): void {
      const filterDisplay = filterMenuRef.current
        ? getComputedStyle(filterMenuRef.current).display
        : null;
      const areFiltersNotDisplayed = filterDisplay === 'none';
      setIsFilterDrawerDisplayed(areFiltersNotDisplayed);
    }

    if (!isWindowResizing) updateFilterDrawerDisplay();
  }, [areFiltersDisplayed, filterMenuRef, isWindowResizing]);

  useEffect(() => {
    function updateFilterHeight(): void {
      filterMenuRef.current?.setAttribute(
        'style',
        `max-height: calc(100dvh - ${headerBottomPosition}px)`
      );
    }

    updateFilterHeight();
  }, [headerBottomPosition]);

  return (
    <div className="profile-search-page">
      <div
        className={`profile-catalog ${!areFiltersDisplayed ? 'profile-catalog--filter-hidden' : ''}`}
      >
        <FilterMenu ref={filterMenuRef} className="filter" hidden={!areFiltersDisplayed} />
        <div className="profiles">
          <div className="profiles__header">
            <FilterDisplayToggleButton
              areFiltersDisplayed={areFiltersDisplayed}
              onClick={toggleFilterDisplay}
            />
          </div>
          <ProfileGrid className="profiles__grid" />
        </div>
      </div>
      <FilterDrawer
        className="filter-drawer"
        isOpen={areFiltersDisplayed && isFilterDrawerDisplayed}
        onClose={closeFilterDrawer}
      />
    </div>
  );
}

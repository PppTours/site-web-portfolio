import './ProfileView.scss';

import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import useWindowResizing from 'src/hooks/useWindowResizing';
import AdditionalClassName from 'src/types/AdditionalClassName';

import FilterDisplayButton from './components/FilterDisplayButton/FilterDisplayButton';
import FilterDrawer from './components/FilterDrawer/FilterDrawer';
import FilterMenu from './components/FilterMenu/FilterMenu';
import ProfileGrid from './components/ProfileGrid/ProfileGrid';
import useHeaderBottom from './hooks/useFilterMenuHeight';

export interface IProfileView extends AdditionalClassName {
  /**
   * Header reference.
   */
  headerRef: RefObject<HTMLDivElement> | undefined;
}

/**
 * View to display profiles.
 */
export default function ProfileView({ headerRef, className }: IProfileView) {
  const filterMenuRef = useRef<HTMLDivElement>(null);
  const [displayFilters, setDisplayFilters] = useState<boolean>(false);
  const [displayFilterDrawer, setDisplayFilterDrawer] = useState<boolean>(false);
  const headerBottom = useHeaderBottom(headerRef);
  const isWindowResizing = useWindowResizing();

  /**
   * Handle filter display.
   * @param {boolean} display Whether to display filters or not.
   */
  const handleFilterDisplay = useCallback((display: boolean) => setDisplayFilters(display), []);

  /**
   * Handle filter drawer closure.
   */
  const handleFilterDrawerClosure = useCallback(() => {
    setDisplayFilters(false);
  }, []);

  useEffect(() => {
    /**
     * Update filter display.
     */
    function updateFilterDisplay(): void {
      setDisplayFilterDrawer(
        (filterMenuRef.current ? getComputedStyle(filterMenuRef.current).display : 'null') ===
          'none'
      );
    }

    if (!isWindowResizing) updateFilterDisplay();
  }, [displayFilters, filterMenuRef, isWindowResizing]);

  useEffect(() => {
    filterMenuRef.current?.setAttribute('style', `max-height: calc(100dvh - ${headerBottom}px)`);
  }, [headerBottom]);

  return (
    <>
      <div
        className={`profile-view ${!displayFilters ? 'profile-view--filter-hidden' : ''} ${className ?? ''}`}
      >
        <FilterMenu ref={filterMenuRef} className="filter" hidden={!displayFilters} />
        <div className="profiles">
          <div className="profiles__header">
            <FilterDisplayButton
              areFiltersDisplayed={displayFilters}
              onClick={handleFilterDisplay}
            />
          </div>
          <ProfileGrid className="profiles__catalog" />
        </div>
      </div>
      <FilterDrawer
        className="filter-drawer"
        open={displayFilters && displayFilterDrawer}
        onClose={handleFilterDrawerClosure}
      />
    </>
  );
}

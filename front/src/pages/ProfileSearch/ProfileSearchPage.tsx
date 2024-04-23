import './ProfileSearchPage.scss';

import { useCallback, useEffect, useRef, useState } from 'react';
import useTranslation from 'src/hooks/useTranslation';
import useWindowResizing from 'src/hooks/useWindowResizing';
import { I18nKey } from 'src/i18n/I18nKey';

import FilterDisplayToggleButton from './components/FilterDisplayToggleButton/FilterDisplayToggleButton';
import FilterDrawer from './components/FilterDrawer/FilterDrawer';
import FilterMenu from './components/FilterMenu/FilterMenu';
import ProfileGrid from './components/ProfileGrid/ProfileGrid';
import useHeaderBottomPosition from './hooks/useHeaderBottomPosition';

export default function ProfileSearchPage() {
  const { translate } = useTranslation();
  const profileHeaderRef = useRef<HTMLDivElement>(null);
  const filterMenuRef = useRef<HTMLDivElement>(null);
  const [areFiltersDisplayed, setAreFiltersDisplayed] = useState<boolean>(false);
  const [isFilterDrawerDisplayed, setIsFilterDrawerDisplayed] = useState<boolean>(false);
  const headerBottomPosition = useHeaderBottomPosition(profileHeaderRef);
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
        `top: ${headerBottomPosition}px;
        max-height: calc(100dvh - ${headerBottomPosition}px)`
      );
    }

    updateFilterHeight();
  }, [headerBottomPosition]);

  return (
    <div className="profile-search-page">
      <div className={`profiles ${!areFiltersDisplayed ? 'profiles--filter-hidden' : ''}`}>
        <div ref={profileHeaderRef} className="profiles__header">
          <h2 className="title">{`${translate(I18nKey.OurTalents)} (10)`}</h2>
          <FilterDisplayToggleButton
            areFiltersDisplayed={areFiltersDisplayed}
            onClick={toggleFilterDisplay}
          />
        </div>
        <div className="profiles__main">
          <FilterMenu
            ref={filterMenuRef}
            className="profile-filter"
            hidden={!areFiltersDisplayed}
          />
          <ProfileGrid className="profile-grid" />
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

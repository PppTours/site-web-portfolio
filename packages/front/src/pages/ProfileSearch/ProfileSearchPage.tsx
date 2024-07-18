import './ProfileSearchPage.scss';

import useTranslation from 'src/hooks/useTranslation';
import { I18nKey } from 'src/i18n/I18nKey';

import FilterDisplayToggleButton from './components/FilterDisplayToggleButton/FilterDisplayToggleButton';
import FilterDrawer from './components/FilterDrawer/FilterDrawer';
import FilterMenu from './components/FilterMenu/FilterMenu';
import useFilteredProfiles from './components/ProfileGrid/hooks/useProfiles';
import ProfileGrid from './components/ProfileGrid/ProfileGrid';
import useFilterDisplay from './hooks/useFilterDisplay';
import useFilterDrawerDisplay from './hooks/useFilterDrawerDisplay';
import useFilterMenuTopPosition from './hooks/useFilterMenuTopPosition';
import useProfileSearchFilters from './hooks/useProfileSearchFilters';

export default function ProfileSearchPage() {
  const { translate } = useTranslation();
  const { filters, setFilters } = useProfileSearchFilters();
  const { profiles, areProfilesLoading, filterProfiles } = useFilteredProfiles();
  const { areFiltersDisplayed, toggleFilterDisplay, closeFilterDrawer } = useFilterDisplay();
  const { filterMenuTopPosition, profileHeaderRef } = useFilterMenuTopPosition();
  const { isFilterDrawerDisplayed, filterMenuRef } = useFilterDrawerDisplay();

  function updateProfiles(): void {
    filterProfiles(filters);
  }

  return (
    <div className="profile-search-page">
      <div className={`profiles ${!areFiltersDisplayed ? 'profiles--filter-hidden' : ''}`}>
        <div ref={profileHeaderRef} className="profiles__header">
          <h2 className="title">{`${translate(I18nKey.OurTalents)} (${areProfilesLoading ? 0 : profiles.length})`}</h2>
          <FilterDisplayToggleButton
            areFiltersDisplayed={areFiltersDisplayed}
            onClick={() => toggleFilterDisplay()}
          />
        </div>
        <div className="profiles__main">
          <FilterMenu
            ref={filterMenuRef}
            className="profile-filter"
            filters={filters}
            topPosition={filterMenuTopPosition}
            hidden={!areFiltersDisplayed}
            onFilterUpdate={setFilters}
            onFilterApplication={updateProfiles}
          />
          <ProfileGrid className="profile-grid" profiles={profiles} loading={areProfilesLoading} />
        </div>
      </div>
      <FilterDrawer
        className="filter-drawer"
        isOpen={areFiltersDisplayed && isFilterDrawerDisplayed}
        filters={filters}
        onClose={closeFilterDrawer}
        onFilterUpdate={setFilters}
        onFilterApplication={updateProfiles}
      />
    </div>
  );
}

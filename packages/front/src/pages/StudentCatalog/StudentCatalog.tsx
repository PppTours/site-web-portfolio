import './StudentCatalog.scss';

import useTranslation from 'src/hooks/useTranslation';
import { I18nKey } from 'src/i18n/I18nKey';

import FilterDisplayToggleButton from './components/FilterDisplayToggleButton/FilterDisplayToggleButton';
import FilterDrawer from './components/FilterDrawer/FilterDrawer';
import FilterMenu from './components/FilterMenu/FilterMenu';
import useFilteredStudents from './components/StudentGrid/hooks/useStudents';
import StudentGrid from './components/StudentGrid/StudentGrid';
import useFilterDisplay from './hooks/useFilterDisplay';
import useFilterDrawerDisplay from './hooks/useFilterDrawerDisplay';
import useFilterMenuTopPosition from './hooks/useFilterMenuTopPosition';
import useStudentCatalogFilters from './hooks/useStudentCatalogFilters';

export default function StudentCatalogPage() {
  const { translate } = useTranslation();
  const { filters, setFilters } = useStudentCatalogFilters();
  const { students, areStudentsLoading, filterStudents } = useFilteredStudents();
  const { areFiltersDisplayed, toggleFilterDisplay, closeFilterDrawer } = useFilterDisplay();
  const { filterMenuTopPosition, studentHeaderRef } = useFilterMenuTopPosition();
  const { isFilterDrawerDisplayed, filterMenuRef } = useFilterDrawerDisplay();

  function updateStudents(): void {
    filterStudents(filters);
  }

  return (
    <div className="student-catalog-page">
      <div className={`students ${!areFiltersDisplayed ? 'students--filter-hidden' : ''}`}>
        <div ref={studentHeaderRef} className="students__header">
          <h2 className="title">{`${translate(I18nKey.OurTalents)} (${areStudentsLoading ? 0 : students.length})`}</h2>
          <FilterDisplayToggleButton
            areFiltersDisplayed={areFiltersDisplayed}
            onClick={() => toggleFilterDisplay()}
          />
        </div>
        <div className="students__main">
          <FilterMenu
            ref={filterMenuRef}
            className="student-filter"
            filters={filters}
            topPosition={filterMenuTopPosition}
            hidden={!areFiltersDisplayed}
            onFilterUpdate={setFilters}
            onFilterApplication={updateStudents}
          />
          <StudentGrid className="student-grid" students={students} loading={areStudentsLoading} />
        </div>
      </div>
      <FilterDrawer
        className="filter-drawer"
        isOpen={areFiltersDisplayed && isFilterDrawerDisplayed}
        filters={filters}
        onClose={closeFilterDrawer}
        onFilterUpdate={setFilters}
        onFilterApplication={updateStudents}
      />
    </div>
  );
}

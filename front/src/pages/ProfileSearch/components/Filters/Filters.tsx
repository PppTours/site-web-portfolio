import './Filters.scss';

import { Button } from 'antd';
import useTranslation from 'src/hooks/useTranslation';
import { I18nKey } from 'src/i18n/I18nKey';
import AdditionalClassName from 'src/types/AdditionalClassName';

import { ProfileSearchFilters } from '../../hooks/useProfileSearchFilters';
import FilterGroup from '../FilterMenu/components/FilterGroup/FilterGroup';
import StudyLevelFilter from '../FilterMenu/components/StudyLevelFilter/StudyLevelFilter';
import StudySpecialtyFilter from '../FilterMenu/components/StudySpecialtyFilter/StudySpecialtyFilter';

export interface FiltersProps extends AdditionalClassName {
  filters: ProfileSearchFilters;
  onFilterUpdate: (updatedFilters: ProfileSearchFilters) => void;
  onFilterApplication: () => void;
}

export default function Filters({
  filters,
  className,
  onFilterUpdate,
  onFilterApplication
}: FiltersProps) {
  const { translate } = useTranslation();

  function clearAllFilters(): void {
    onFilterUpdate({ studySpecialties: [], studyLevels: [] });
  }

  function applyFilters(): void {
    onFilterApplication();
  }

  return (
    <div className={`filters ${className ?? ''}`}>
      <p className="filters__title">{translate(I18nKey.SortAndFilter)}</p>
      <div className="filter-groups">
        <FilterGroup title={translate(I18nKey.StudySpecialty)}>
          <StudySpecialtyFilter
            checkedOptions={filters.studySpecialties}
            onUpdate={(studySpecialties) => onFilterUpdate({ ...filters, studySpecialties })}
          />
        </FilterGroup>
        <FilterGroup title={translate(I18nKey.StudyLevel)}>
          <StudyLevelFilter
            checkedOptions={filters.studyLevels}
            onUpdate={(studyLevels) => onFilterUpdate({ ...filters, studyLevels })}
          />
        </FilterGroup>
      </div>
      <div className="actions">
        <Button className="actions__reset-filters" type="text" onClick={clearAllFilters}>
          {translate(I18nKey.ClearAll)}
        </Button>
        <Button className="actions__apply-filters" type="primary" onClick={applyFilters}>
          {translate(I18nKey.Apply)}
        </Button>
      </div>
    </div>
  );
}

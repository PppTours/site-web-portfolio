import './Filters.scss';

import { Button } from 'antd';
import useTranslation from 'src/hooks/useTranslation';
import { I18nKey } from 'src/i18n/I18nKey';
import AdditionalClassName from 'src/types/AdditionalClassName';

import FilterGroup from '../FilterMenu/components/FilterGroup/FilterGroup';
import StudyLevelFilter from '../FilterMenu/components/StudyLevelFilter/StudyLevelFilter';
import StudySpecialtyFilter from '../FilterMenu/components/StudySpecialtyFilter/StudySpecialtyFilter';

export interface FiltersProps extends AdditionalClassName {}

export default function Filters({ className }: FiltersProps) {
  const { translate } = useTranslation();

  return (
    <div className={`filters ${className ?? ''}`}>
      <p className="filters__title">{translate(I18nKey.SortAndFilter)}</p>
      <div className="filter-groups">
        <FilterGroup title={translate(I18nKey.StudySpecialty)}>
          <StudySpecialtyFilter />
        </FilterGroup>
        <FilterGroup title={translate(I18nKey.StudyLevel)}>
          <StudyLevelFilter />
        </FilterGroup>
      </div>
      <div className="actions">
        <Button className="actions__reset-filters" type="text">
          {translate(I18nKey.ClearAll)}
        </Button>
        <Button className="actions__apply-filters" type="primary">
          {translate(I18nKey.Apply)}
        </Button>
      </div>
    </div>
  );
}

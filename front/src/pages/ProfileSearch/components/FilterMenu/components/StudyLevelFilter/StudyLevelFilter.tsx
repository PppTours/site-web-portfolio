import useEnumTranslation from 'src/hooks/useEnumTranslation';
import StudyLevel from 'src/models/StudyLevel/StudyLevel';
import { studyLevelTranslationMapping as translationMapping } from 'src/models/StudyLevel/StudyLevelTranslationMapping';
import AdditionalClassName from 'src/types/AdditionalClassName';

import CheckboxList from '../CheckboxList/CheckboxList';

export interface StudyLevelFilterProps extends AdditionalClassName {}

export default function StudyLevelFilter({ className }: StudyLevelFilterProps) {
  const { getAllTranslations } = useEnumTranslation<StudyLevel>(translationMapping);
  const studyLevelFilters = getAllTranslations();

  return (
    <CheckboxList<StudyLevel>
      className={`filter-group-list ${className ?? ''}`}
      options={studyLevelFilters}
      onOptionClick={(option: StudyLevel) => console.log(option)}
    />
  );
}

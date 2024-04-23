import useEnumTranslation from 'src/hooks/useEnumTranslation';
import { studySpecialtyTranslationMapping as translationMapping } from 'src/models/StudySpecialty/StudentSpecialtyTranslationMapping';
import StudySpecialty from 'src/models/StudySpecialty/StudySpecialty';
import AdditionalClassName from 'src/types/AdditionalClassName';

import CheckboxList from '../CheckboxList/CheckboxList';

export interface StudySpecialtyFilterProps extends AdditionalClassName {}

export default function StudySpecialtyFilter({ className }: StudySpecialtyFilterProps) {
  const { getAllTranslations } = useEnumTranslation<StudySpecialty>(translationMapping);
  const studySpecialtyFilters = getAllTranslations();

  return (
    <CheckboxList<StudySpecialty>
      className={`filter-group-list ${className ?? ''}`}
      options={studySpecialtyFilters}
      onOptionClick={(option: StudySpecialty) => console.log(option)}
    />
  );
}

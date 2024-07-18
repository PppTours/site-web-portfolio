import useEnumTranslation from 'src/hooks/useEnumTranslation';
import { studySpecialtyTranslationMapping as translationMapping } from 'src/models/StudySpecialty/StudentSpecialtyTranslationMapping';
import StudySpecialty from 'src/models/StudySpecialty/StudySpecialty';
import AdditionalClassName from 'src/types/AdditionalClassName';

import CheckboxList, { CheckboxListOptionData } from '../CheckboxList/CheckboxList';

export interface StudySpecialtyFilterProps extends AdditionalClassName {
  checkedOptions: StudySpecialty[];
  onUpdate: (checkedOptions: StudySpecialty[]) => void;
}

export default function StudySpecialtyFilter({
  checkedOptions,
  className,
  onUpdate
}: StudySpecialtyFilterProps) {
  const { getAllTranslations } = useEnumTranslation<StudySpecialty>(translationMapping);

  function getOptions(): Record<StudySpecialty, CheckboxListOptionData> {
    const studySpecialtyFilters = Object.entries(getAllTranslations());
    return studySpecialtyFilters.reduce(
      (acc, [studySpecialty, studySpecialtyLabel]) => ({
        ...acc,
        [studySpecialty]: {
          label: studySpecialtyLabel,
          checked: checkedOptions.includes(studySpecialty as StudySpecialty)
        }
      }),
      {} as Record<StudySpecialty, CheckboxListOptionData>
    );
  }

  function onOptionClick(option: StudySpecialty): void {
    const updatedCheckedOptions = checkedOptions.includes(option)
      ? [...checkedOptions.filter((o) => o !== option)]
      : [...checkedOptions, option];
    onUpdate(updatedCheckedOptions);
  }

  return (
    <CheckboxList<StudySpecialty>
      className={`filter-group-list ${className ?? ''}`}
      options={getOptions()}
      onOptionClick={onOptionClick}
    />
  );
}

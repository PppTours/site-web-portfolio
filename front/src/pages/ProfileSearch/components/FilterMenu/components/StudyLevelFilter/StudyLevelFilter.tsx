import useEnumTranslation from 'src/hooks/useEnumTranslation';
import StudyLevel from 'src/models/StudyLevel/StudyLevel';
import { studyLevelTranslationMapping as translationMapping } from 'src/models/StudyLevel/StudyLevelTranslationMapping';
import AdditionalClassName from 'src/types/AdditionalClassName';

import CheckboxList, { CheckboxListOptionData } from '../CheckboxList/CheckboxList';

export interface StudyLevelFilterProps extends AdditionalClassName {
  checkedOptions: StudyLevel[];
  onUpdate: (checkedOptions: StudyLevel[]) => void;
}

export default function StudyLevelFilter({
  checkedOptions,
  className,
  onUpdate
}: StudyLevelFilterProps) {
  const { getAllTranslations } = useEnumTranslation<StudyLevel>(translationMapping);

  function getOptions(): Record<StudyLevel, CheckboxListOptionData> {
    const studyLevelFilters = Object.entries(getAllTranslations());
    return studyLevelFilters.reduce(
      (acc, [studyLevel, studyLevelLabel]) => ({
        ...acc,
        [studyLevel]: {
          label: studyLevelLabel,
          checked: checkedOptions.includes(studyLevel as StudyLevel)
        }
      }),
      {} as Record<StudyLevel, CheckboxListOptionData>
    );
  }

  function onOptionClick(option: StudyLevel): void {
    const updatedCheckedOptions = checkedOptions.includes(option)
      ? [...checkedOptions.filter((o) => o !== option)]
      : [...checkedOptions, option];
    onUpdate(updatedCheckedOptions);
  }

  return (
    <CheckboxList<StudyLevel>
      className={`filter-group-list ${className ?? ''}`}
      options={getOptions()}
      onOptionClick={onOptionClick}
    />
  );
}

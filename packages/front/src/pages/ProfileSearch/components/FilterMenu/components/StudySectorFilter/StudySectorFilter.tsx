import useEnumTranslation from 'src/hooks/useEnumTranslation';
import { studySectorTranslationMapping as translationMapping } from 'src/models/StudySector/StudentSectorTranslationMapping';
import StudySector from 'src/models/StudySector/StudySector';
import AdditionalClassName from 'src/types/AdditionalClassName';

import CheckboxList, { CheckboxListOptionData } from '../CheckboxList/CheckboxList';

export interface StudySectorFilterProps extends AdditionalClassName {
  checkedOptions: StudySector[];
  onUpdate: (checkedOptions: StudySector[]) => void;
}

export default function StudySectorFilter({
  checkedOptions,
  className,
  onUpdate
}: StudySectorFilterProps) {
  const { getAllTranslations } = useEnumTranslation<StudySector>(translationMapping);

  function getOptions(): Record<StudySector, CheckboxListOptionData> {
    const studySectorFilters = Object.entries(getAllTranslations());
    return studySectorFilters.reduce(
      (acc, [studySector, studySectorLabel]) => ({
        ...acc,
        [studySector]: {
          label: studySectorLabel,
          checked: checkedOptions.includes(studySector as StudySector)
        }
      }),
      {} as Record<StudySector, CheckboxListOptionData>
    );
  }

  function onOptionClick(option: StudySector): void {
    const updatedCheckedOptions = checkedOptions.includes(option)
      ? [...checkedOptions.filter((o) => o !== option)]
      : [...checkedOptions, option];
    onUpdate(updatedCheckedOptions);
  }

  return (
    <CheckboxList<StudySector>
      className={`filter-group-list ${className ?? ''}`}
      options={getOptions()}
      onOptionClick={onOptionClick}
    />
  );
}

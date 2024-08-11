import useEnumTranslation from 'src/hooks/useEnumTranslation';
import { studySectorTranslationMapping as translationMapping } from 'src/models/StudySector/StudySectorInitialismTranslationMapping';
import StudySectorInitialism from 'src/models/StudySector/StudySectorInitialism';
import AdditionalClassName from 'src/types/AdditionalClassName';

import CheckboxList, { CheckboxListOptionData } from '../CheckboxList/CheckboxList';

export interface StudySectorFilterProps extends AdditionalClassName {
  checkedOptions: StudySectorInitialism[];
  onUpdate: (checkedOptions: StudySectorInitialism[]) => void;
}

export default function StudySectorFilter({
  checkedOptions,
  className,
  onUpdate
}: StudySectorFilterProps) {
  const { getAllTranslations } = useEnumTranslation<StudySectorInitialism>(translationMapping);

  function getOptions(): Record<StudySectorInitialism, CheckboxListOptionData> {
    const studySectorFilters = Object.entries(getAllTranslations());
    return studySectorFilters.reduce(
      (acc, [studySector, studySectorLabel]) => ({
        ...acc,
        [studySector]: {
          label: studySectorLabel,
          checked: checkedOptions.includes(studySector as StudySectorInitialism)
        }
      }),
      {} as Record<StudySectorInitialism, CheckboxListOptionData>
    );
  }

  function onOptionClick(option: StudySectorInitialism): void {
    const updatedCheckedOptions = checkedOptions.includes(option)
      ? [...checkedOptions.filter((o) => o !== option)]
      : [...checkedOptions, option];
    onUpdate(updatedCheckedOptions);
  }

  return (
    <CheckboxList<StudySectorInitialism>
      className={`filter-group-list ${className ?? ''}`}
      options={getOptions()}
      onOptionClick={onOptionClick}
    />
  );
}

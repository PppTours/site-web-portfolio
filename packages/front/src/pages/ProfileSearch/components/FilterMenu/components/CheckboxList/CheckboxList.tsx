import './CheckboxList.scss';

import { Checkbox } from 'antd';
import AdditionalClassName from 'src/types/AdditionalClassName';

export interface CheckboxListOptionData {
  label: string;
  checked?: boolean;
}

export interface CheckboxListProps<OptionKey extends string> extends AdditionalClassName {
  options: Record<OptionKey, CheckboxListOptionData>;
  onOptionClick: (option: OptionKey) => void;
}

export default function CheckboxList<OptionKey extends string>({
  options,
  className,
  onOptionClick
}: CheckboxListProps<OptionKey>) {
  return (
    <ul className={`checkbox-list ${className ?? ''}`}>
      {Object.entries(options).map(([optionKey, optionValue], index) => (
        <li key={index} className="checkbox-list__option">
          <Checkbox
            checked={(optionValue as CheckboxListOptionData).checked}
            onChange={() => onOptionClick(optionKey as OptionKey)}
          >
            {(optionValue as CheckboxListOptionData).label}
          </Checkbox>
        </li>
      ))}
    </ul>
  );
}

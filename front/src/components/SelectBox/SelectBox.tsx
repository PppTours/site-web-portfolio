import './SelectBox.scss';

import { CheckOutlined } from '@ant-design/icons';
import { Select } from 'antd';

/**
 * Select box option properties.
 */
export interface SelectBoxOptionProps<T extends string> {
  /**
   * Value of the option.
   */
  value: T;

  /**
   * Label of the option.
   */
  label: string;
}

/**
 * Select box properties.
 */
interface SelectBoxProps<T extends string> {
  /**
   * Placeholder if no value is selected.
   */
  placeholder?: string;

  /**
   * Class name.
   */
  className?: string;

  /**
   * Default value.
   */
  defaultOption?: SelectBoxOptionProps<T>;

  /**
   * Box options.
   */
  options: SelectBoxOptionProps<T>[];

  /**
   * Function called when an option is selected.
   * @param {T} sort Selected sort.
   */
  onSelect: (sort: T | null) => void;
}

/**
 * Select box component.
 */
export default function SelectBox<T extends string>({
  placeholder,
  className,
  defaultOption,
  options,
  onSelect
}: SelectBoxProps<T>) {
  return (
    <Select<T>
      className={`select-box ${className}`}
      popupClassName="select-box-options"
      placeholder={placeholder}
      allowClear
      popupMatchSelectWidth={false}
      menuItemSelectedIcon={<CheckOutlined />}
      placement="bottomLeft"
      defaultValue={defaultOption?.value}
      options={options}
      onSelect={(sort) => onSelect(sort as T)}
      onClear={() => onSelect(null)}
    />
  );
}

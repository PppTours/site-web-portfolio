import './StudentSearchBar.scss';

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import useTranslation from 'src/hooks/useTranslation';
import { I18nKey } from 'src/i18n/I18nKey';
import AdditionalClassName from 'src/types/AdditionalClassName';

interface StudentSearchBarProps extends AdditionalClassName {
  value: string;
  onTextChange: (text: string) => void;
}

export default function StudentSearchBar({
  value,
  className,
  onTextChange
}: StudentSearchBarProps) {
  const { translate } = useTranslation();

  return (
    <div className={`search-bar ${className ?? ''}`}>
      <Input
        className="search-bar__input"
        name="search-bar"
        addonBefore={<SearchOutlined />}
        placeholder={translate(I18nKey.SearchProfile)}
        value={value}
        size="middle"
        allowClear={true}
        onChange={(event) => onTextChange(event.target.value ?? '')}
      />
    </div>
  );
}

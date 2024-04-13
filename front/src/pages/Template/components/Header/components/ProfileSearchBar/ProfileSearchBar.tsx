import './ProfileSearchBar.scss';

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import useTranslation from 'src/hooks/useTranslation';
import { I18nKeys } from 'src/i18n/I18nKeys';
import AdditionalClassName from 'src/types/AdditionalClassName';

type ProfileSearchBarProps = AdditionalClassName;

export default function ProfileSearchBar({ className }: ProfileSearchBarProps) {
  const { translate } = useTranslation();

  return (
    <div className={`search-bar ${className ?? ''}`}>
      <Input
        className="search-bar__input"
        addonBefore={<SearchOutlined />}
        placeholder={translate(I18nKeys.SearchProfile)}
        size="middle"
      />
    </div>
  );
}

import './SearchBar.scss';

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import AdditionalClassName from '../../../types/IClassName';

type ISearchBar = AdditionalClassName;

export function SearchBar({ className }: ISearchBar) {
  return (
    <div className={`search-bar ${className ?? ''}`}>
      <Input
        className="search-bar__input"
        addonBefore={<SearchOutlined />}
        placeholder="Rechercher un profil ..."
        size="middle"
      />
    </div>
  );
}

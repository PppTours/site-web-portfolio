import './FiltersDisplayButton.scss';

import { Button } from 'antd';
import { useState } from 'react';

import filtersIcon from '../../../assets/icons/filters.svg?react';
import SvgIcon from '../../../components/SvgIcon/SvgIcon';
import AdditionalClassName from '../../../types/IClassName';

export interface IFiltersDisplayButton extends AdditionalClassName {
  onClick: (filtersDisplayed: boolean) => void;
}

export default function FiltersDisplayButton({ className, onClick }: IFiltersDisplayButton) {
  const [display, setDisplay] = useState<boolean>(true);

  function handleClick() {
    const filtersDisplayed = !display;
    setDisplay(filtersDisplayed);
    onClick(filtersDisplayed);
  }

  return (
    <div className={`filters-display ${className ?? ''}`}>
      <Button className="filters-display-button" type="text" size="small" onClick={handleClick}>
        <span className="filters-display-button__text">{` ${display ? 'Masquer' : 'Afficher'} les filtres`}</span>
        <SvgIcon className="filters-display-button__icon" SvgComponent={filtersIcon} />
      </Button>
    </div>
  );
}

import './FilterMenu.scss';

import { forwardRef, LegacyRef, memo } from 'react';
import AdditionalClassName from 'src/types/AdditionalClassName';

import Filters from '../Filters/Filters';

interface FilterMenuProps extends AdditionalClassName {
  hidden: boolean;
}

const FilterMenu = forwardRef(function FilterMenu(
  { className, hidden = false }: FilterMenuProps,
  ref: LegacyRef<HTMLDivElement> | undefined
) {
  return (
    <div
      ref={ref}
      className={`filter-menu ${hidden ? 'filter-menu--hidden' : ''} ${className ?? ''}`}
    >
      <Filters className="filter-menu__content" />
    </div>
  );
});

export default memo(FilterMenu);

import './FilterMenu.scss';

import { forwardRef, LegacyRef, memo } from 'react';
import AdditionalClassName from 'src/types/AdditionalClassName';

import Filters, { FiltersProps } from '../Filters/Filters';

interface FilterMenuProps extends AdditionalClassName, FiltersProps {
  topPosition: number;
  hidden: boolean;
}

const FilterMenu = forwardRef(function FilterMenu(
  {
    filters,
    topPosition,
    hidden = false,
    className,
    onFilterUpdate,
    onFilterApplication
  }: FilterMenuProps,
  ref: LegacyRef<HTMLDivElement> | undefined
) {
  return (
    <div
      ref={ref}
      className={`filter-menu ${hidden ? 'filter-menu--hidden' : ''} ${className ?? ''}`}
      style={{ top: `top: ${topPosition}px`, maxHeight: `calc(100dvh - ${topPosition}px)` }}
    >
      <Filters
        className="filter-menu__content"
        filters={filters}
        onFilterUpdate={onFilterUpdate}
        onFilterApplication={onFilterApplication}
      />
    </div>
  );
});

export default memo(FilterMenu);

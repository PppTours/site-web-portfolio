import './FilterGroup.scss';

import { ReactElement } from 'react';
import AdditionalClassName from 'src/types/AdditionalClassName';

export interface FilterGroupProps extends AdditionalClassName {
  title: string;
  children: ReactElement;
}

export default function FilterGroup({ title, children, className }: FilterGroupProps) {
  return (
    <div className={`filter-group ${className ?? ''}`}>
      <p className="filter-group__title">{title}</p>
      {children}
    </div>
  );
}

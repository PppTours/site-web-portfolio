import './ProfileGrid.scss';

import { memo } from 'react';
import AdditionalClassName from 'src/types/AdditionalClassName';

type ProfileGridProps = AdditionalClassName;

function ProfileGrid({ className }: ProfileGridProps) {
  function getNumbersFromZeroTo(n: number): number[] {
    return Array.from(Array(n).keys());
  }

  return (
    <div className={`profile-grid ${className ?? ''}`}>
      {getNumbersFromZeroTo(20).map((i) => (
        <div key={i} className="profile-grid-card">
          {i + 1}
        </div>
      ))}
    </div>
  );
}

export default memo(ProfileGrid);

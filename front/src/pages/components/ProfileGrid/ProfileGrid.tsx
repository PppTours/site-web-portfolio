import './ProfileGrid.scss';

import { memo } from 'react';
import AdditionalClassName from 'src/types/IClassName';

type IProfileGrid = AdditionalClassName;

/**
 * Grid of profiles.
 */
function ProfileGrid({ className }: IProfileGrid) {
  const items = Array.from(Array(20).keys());

  return (
    <div className={`profile-grid ${className ?? ''}`}>
      {items.map((i) => (
        <div key={i} className="profile-grid-card">
          {i + 1}
        </div>
      ))}
    </div>
  );
}

export default memo(ProfileGrid);

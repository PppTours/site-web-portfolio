import './ProfileGrid.scss';

import AdditionalClassName from '../../../types/IClassName';

type IProfileGrid = AdditionalClassName;

export default function ProfileGrid({ className }: IProfileGrid) {
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

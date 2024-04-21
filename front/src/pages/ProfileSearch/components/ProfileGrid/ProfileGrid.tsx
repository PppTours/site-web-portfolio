import './ProfileGrid.scss';

import { memo } from 'react';
import { fakeProfiles } from 'src/assets/mock/FakeProfiles';
import AdditionalClassName from 'src/types/AdditionalClassName';

import ProfileCard from './components/ProfileCard/ProfileCard';

type ProfileGridProps = AdditionalClassName;

function ProfileGrid({ className }: ProfileGridProps) {
  return (
    <div className={`profile-grid ${className ?? ''}`}>
      {fakeProfiles.map((profile, i) => (
        <ProfileCard key={i} className="profile-grid__card" profile={profile} />
      ))}
    </div>
  );
}

export default memo(ProfileGrid);

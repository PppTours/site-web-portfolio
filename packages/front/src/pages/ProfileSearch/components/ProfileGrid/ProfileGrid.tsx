import './ProfileGrid.scss';

import { memo, ReactElement } from 'react';
import { FakeProfile } from 'src/assets/mock/FakeProfiles';
import AdditionalClassName from 'src/types/AdditionalClassName';

import ProfileCard from './components/ProfileCard/ProfileCard';
import ProfileCardSkeleton from './components/ProfileCardSkeleton/ProfileCardSkeleton';

interface ProfileGridProps extends AdditionalClassName {
  profiles: FakeProfile[];
  loading: boolean;
}

function ProfileGrid({ profiles, loading, className }: ProfileGridProps) {
  function getSkeletonGrid(cardNumber: number): ReactElement[] {
    const skeletonCards = [];
    for (let i = 0; i < cardNumber; i++) skeletonCards.push(<ProfileCardSkeleton key={i} />);
    return skeletonCards;
  }

  return (
    <div className={`profile-grid ${className ?? ''}`}>
      {loading
        ? getSkeletonGrid(3)
        : profiles.map((profile, i) => (
            <ProfileCard key={i} className="profile-grid__card" profile={profile} />
          ))}
    </div>
  );
}

export default memo(ProfileGrid);

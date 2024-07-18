import './ProfileCardSkeleton.scss';

import { Skeleton } from 'antd';

export default function ProfileCardSkeleton() {
  return (
    <div className="profile-card-skeleton">
      <Skeleton.Button active={true} className="profile-card-skeleton__content" />
    </div>
  );
}

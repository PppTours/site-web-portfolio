import './StudentCardSkeleton.scss';

import { Skeleton } from 'antd';

export default function StudentCardSkeleton() {
  return (
    <div className="student-card-skeleton">
      <Skeleton.Button active={true} className="student-card-skeleton__content" />
    </div>
  );
}

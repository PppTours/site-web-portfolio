import './StudentGrid.scss';

import { memo, ReactElement } from 'react';
import { StudentDTO } from 'src/dtos/Student/StudentDTO';
import AdditionalClassName from 'src/types/AdditionalClassName';

import StudentCard from './components/StudentCard/StudentCard';
import StudentCardSkeleton from './components/StudentCardSkeleton/StudentCardSkeleton';

interface StudentGridProps extends AdditionalClassName {
  students: StudentDTO[];
  loading: boolean;
}

function StudentGrid({ students, loading, className }: StudentGridProps) {
  function getSkeletonGrid(cardNumber: number): ReactElement[] {
    const skeletonCards = [];
    for (let i = 0; i < cardNumber; i++) skeletonCards.push(<StudentCardSkeleton key={i} />);
    return skeletonCards;
  }

  return (
    <div className={`student-grid ${className ?? ''}`}>
      {loading
        ? getSkeletonGrid(3)
        : students.map((student, i) => (
            <StudentCard key={i} className="student-grid__card" student={student} />
          ))}
    </div>
  );
}

export default memo(StudentGrid);

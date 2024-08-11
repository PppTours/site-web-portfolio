import './StudentCard.scss';

import { useEffect, useState } from 'react';
import { StudentDTO } from 'src/dtos/Student/StudentDTO';
import useEnumTranslation from 'src/hooks/useEnumTranslation';
import { studyLevelTranslationMapping } from 'src/models/StudyLevel/StudyLevelTranslationMapping';
import { studySectorTranslationMapping } from 'src/models/StudySector/StudySectorInitialismTranslationMapping';
import AdditionalClassName from 'src/types/AdditionalClassName';
export interface StudentCardProps extends AdditionalClassName {
  student: StudentDTO;
}

export default function StudentCard({ student, className }: StudentCardProps) {
  const { getTranslation: getStudentLevelTranslation } = useEnumTranslation(
    studyLevelTranslationMapping
  );
  const { getTranslation: getStudentSectorTranslation } = useEnumTranslation(
    studySectorTranslationMapping
  );
  const [picture, setPicture] = useState<string | null>(student.profilePictureUrl);
  const initials = `${student.firstName.at(0)}${student.lastName.at(0)}`;

  useEffect(() => {
    setPicture(student.profilePictureUrl);
  }, [student]);

  return (
    <div className={`student-card ${className ?? ''}`}>
      <div className="student-card__content">
        <div className="student-picture">
          {picture ? (
            <img
              className="student-picture__image"
              src={picture}
              alt={`${student.firstName} ${student.lastName} picture`}
              onError={() => setPicture(null)}
            />
          ) : (
            <div className="student-picture-image-replacement">
              <p className="student-picture-image-replacement__initials">{initials}</p>
            </div>
          )}
        </div>
        <p className="student-name">{`${student.firstName} ${student.lastName}`}</p>
        <div className="student-study">
          <p className="student-study__level">
            {getStudentLevelTranslation(student.studyLevel.name)}
          </p>
          <p className="student-study__sector">
            {student.studySector ? getStudentSectorTranslation(student.studySector.initialism) : ''}
          </p>
        </div>
      </div>
    </div>
  );
}

import './ProfileCard.scss';

import { useState } from 'react';
import { FakeProfile } from 'src/assets/mock/FakeProfiles';
import useEnumTranslation from 'src/hooks/useEnumTranslation';
import { studyLevelTranslationMapping } from 'src/models/StudyLevel/StudyLevelTranslationMapping';
import { studySpecialtyTranslationMapping } from 'src/models/StudySpecialty/StudentSpecialtyTranslationMapping';
import AdditionalClassName from 'src/types/AdditionalClassName';
export interface ProfileCardProps extends AdditionalClassName {
  profile: FakeProfile;
}

export default function ProfileCard({ profile, className }: ProfileCardProps) {
  const { getTranslation: getStudentLevelTranslation } = useEnumTranslation(
    studyLevelTranslationMapping
  );
  const { getTranslation: getStudentSpecialtyTranslation } = useEnumTranslation(
    studySpecialtyTranslationMapping
  );
  const [picture, setPicture] = useState<string | null>(profile.image);

  return (
    <div className={`profile-card ${className ?? ''}`}>
      <div className="profile-card__content">
        <div className="profile-picture">
          {picture ? (
            <img
              className="profile-picture__image"
              src={picture}
              alt={`${profile.firstName} ${profile.lastName} picture`}
              onError={() => setPicture(null)}
            />
          ) : (
            <div className="profile-picture-image-replacement">
              <p className="profile-picture-image-replacement__initials">{`${profile.firstName.at(0)}${profile.lastName.at(0)}`}</p>
            </div>
          )}
        </div>
        <p className="profile-name">{`${profile.firstName} ${profile.lastName}`}</p>
        <div className="profile-study">
          <p className="profile-study__level">{getStudentLevelTranslation(profile.studyLevel)}</p>
          <p className="profile-study__specialty">
            {profile.studySpecialty ? getStudentSpecialtyTranslation(profile.studySpecialty) : ''}
          </p>
        </div>
      </div>
    </div>
  );
}

import './ProfileCard.scss';

import { useState } from 'react';
import { FakeProfile } from 'src/assets/mock/FakeProfiles';
import useTranslation from 'src/hooks/useTranslation';
import StudentLevel from 'src/models/StudentLevel';
import AdditionalClassName from 'src/types/AdditionalClassName';

const defaultPicture =
  'https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg';

export interface ProfileCardProps extends AdditionalClassName {
  profile: FakeProfile;
}

export default function ProfileCard({ profile, className }: ProfileCardProps) {
  const { translate } = useTranslation();
  const [picture, setPicture] = useState<string | null>(profile.image);

  return (
    <div className={`profile-card ${className ?? ''}`}>
      <div className="profile-card__content">
        <div className="profile-picture">
          {picture ? (
            <img
              className="profile-picture__image"
              src={picture ?? defaultPicture}
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
          <p className="profile-study__level">
            {translate(StudentLevel.getTranslationKey(profile.studyLevel))}
          </p>
          <p className="profile-study__specialty">{profile.studySpecialty}</p>
        </div>
      </div>
    </div>
  );
}

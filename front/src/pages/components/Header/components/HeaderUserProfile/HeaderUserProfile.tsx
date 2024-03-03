import './HeaderUserProfile.scss';

import { Button } from 'antd';

import { LanguagesEnum, useLanguage } from '../../../../../contexts/LanguageContext';
import AdditionalClassName from '../../../../../types/IClassName';

interface IHeaderUserProfile extends AdditionalClassName {
  signUp?: boolean;
}

/**
 * User profile in header.
 */
export default function HeaderUserProfile({ signUp = false, className }: IHeaderUserProfile) {
  const currentLanguage = useLanguage();
  const isFrenchLanguage = currentLanguage === LanguagesEnum.French;

  return (
    <div
      className={`header-user-profile ${signUp ? 'header-user-profile--sign-up' : ''} ${className ?? ''}`}
    >
      <Button
        className="header-user-profile__button header-user-profile__button--log-in"
        type="primary"
        shape="round"
      >
        {isFrenchLanguage ? 'Se connecter' : 'Log in'}
      </Button>

      {signUp && (
        <Button
          className="header-user-profile__button header-user-profile__button--sign-up"
          type="link"
          size="small"
        >
          {isFrenchLanguage ? "S'inscrire" : 'Sign up'}
        </Button>
      )}
    </div>
  );
}

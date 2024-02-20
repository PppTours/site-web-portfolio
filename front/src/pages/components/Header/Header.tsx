import './Header.scss';

import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import PolybookDarkLogo from '../../../assets/images/Polybook_dark.png';
import PolybookLightLogo from '../../../assets/images/Polybook_light.png';
import LanguageButton from '../../../components/IconButton/LanguageButton';
import ThemeButton from '../../../components/IconButton/ThemeButton';
import { LanguagesEnum, useLanguage } from '../../../contexts/LanguageContext';
import { useTheme } from '../../../contexts/ThemeContext';
import { ThemesEnum } from '../../../themes/ThemesEnum';

/**
 * Header bar.
 */
export default function Header() {
  const currentTheme = useTheme();
  const currentLanguage = useLanguage();

  const isLightTheme = currentTheme === ThemesEnum.Light;
  const isFrenchLanguage = currentLanguage === LanguagesEnum.French;

  return (
    <header className="header">
      <div className="header__content">
        <a className="logo" href="/">
          <img className="logo__image" src={isLightTheme ? PolybookLightLogo : PolybookDarkLogo} />
        </a>
        <div className="navigation"></div>
        <div className="profile">
          <Button className="profile-button profile-button--large" type="primary" shape="round">
            {isFrenchLanguage ? 'Se connecter' : 'Log in'}
          </Button>
          <Button
            className="profile-button profile-button--small"
            type="primary"
            shape="circle"
            size="small"
            icon={<UserOutlined />}
          />
        </div>
        <div className="action">
          <ThemeButton className="action-button action-button--theme" />
          <LanguageButton className="action-button action-button--language" />
        </div>
      </div>
    </header>
  );
}

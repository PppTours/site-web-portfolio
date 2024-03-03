import './Header.scss';

import PolybookDarkLogo from '../../../assets/images/Polybook_dark.png';
import PolybookLightLogo from '../../../assets/images/Polybook_light.png';
import { useTheme } from '../../../contexts/ThemeContext';
import { ThemesEnum } from '../../../themes/ThemesEnum';
import HeaderActions from './components/HeaderActions/HeaderActions';
import HeaderDrawer from './components/HeaderDrawer/HeaderDrawer';
import HeaderUserProfile from './components/HeaderUserProfile/HeaderUserProfile';

/**
 * Header bar.
 */
export default function Header() {
  const currentTheme = useTheme();

  const isLightTheme = currentTheme === ThemesEnum.Light;

  return (
    <header className="header">
      <div className="header__content">
        <a className="logo" href="/">
          <img className="logo__image" src={isLightTheme ? PolybookLightLogo : PolybookDarkLogo} />
        </a>
        <div className="navigation"></div>
        <HeaderUserProfile className="header-profile" />
        <HeaderActions className="header-actions" />
        <div className="drawer">
          <HeaderDrawer />
        </div>
      </div>
    </header>
  );
}

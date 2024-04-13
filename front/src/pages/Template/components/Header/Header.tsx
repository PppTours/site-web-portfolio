import './Header.scss';

import { forwardRef, LegacyRef, memo, useState } from 'react';
import accountIcon from 'src/assets/icons/account.svg?react';
import MenuIcon from 'src/assets/icons/menu.svg?react';
import searchIcon from 'src/assets/icons/search.svg?react';
import { SvgIconButton } from 'src/components/IconButton/IconButton';
import LanguageToggleButton from 'src/pages/Template/components/LanguageToggleButton/LanguageToggleButton';
import PolybookLogo from 'src/pages/Template/components/PolybookLogo/PolybookLogo';
import ThemeToggleButton from 'src/pages/Template/components/ThemeToggleButton/ThemeToggleButton';
import AdditionalClassName from 'src/types/AdditionalClassName';

import HeaderDrawer from './components/HeaderDrawer/HeaderDrawer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import ProfileSearchBar from './components/ProfileSearchBar/ProfileSearchBar';

interface HeaderProps extends AdditionalClassName {}

const Header = forwardRef(function Header(
  { className }: HeaderProps,
  ref: LegacyRef<HTMLDivElement> | undefined
) {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  function openDrawer(): void {
    setIsDrawerOpen(true);
  }

  function closeDrawer(): void {
    setIsDrawerOpen(false);
  }

  return (
    <header ref={ref} className={`header ${className ?? ''}`}>
      <div className="header__content">
        <HeaderDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
        <SvgIconButton className="drawer-button" svg={MenuIcon} size="large" onClick={openDrawer} />
        <PolybookLogo className="logo" />
        <NavigationBar className="navigation-bar" />
        <ProfileSearchBar className="search-bar" />
        <div className={`actions ${className ?? ''}`}>
          <ThemeToggleButton className="actions__button actions__button--theme" />
          <LanguageToggleButton className="actions__button actions__button--language" />
          <SvgIconButton
            className="actions__button actions__button--search"
            svg={searchIcon}
            onClick={() => {}}
          />
          <SvgIconButton
            className="actions__button actions__button--profile"
            svg={accountIcon}
            onClick={() => {}}
          />
        </div>
      </div>
    </header>
  );
});

export default memo(Header);

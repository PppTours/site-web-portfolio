import './Header.scss';

import { forwardRef, LegacyRef, useState } from 'react';

import accountIcon from '../../../assets/icons/account.svg?react';
import MenuIcon from '../../../assets/icons/menu.svg?react';
import searchIcon from '../../../assets/icons/search.svg?react';
import { SvgIconButton } from '../../../components/IconButton/IconButton';
import LanguageButton from '../../../components/IconButton/LanguageButton';
import ThemeButton from '../../../components/IconButton/ThemeButton';
import PolybookLogo from '../../../components/PolybookLogo/PolybookLogo';
import AdditionalClassName from '../../../types/IClassName';
import { SearchBar } from '../SearchBar/SearchBar';
import HeaderDrawer from './components/HeaderDrawer/HeaderDrawer';
import NavigationBar from './components/NavigationBar/NavigationBar';

interface IHeader extends AdditionalClassName {}

/**
 * Header bar.
 */
export const Header = forwardRef(function Header(
  { className }: IHeader,
  ref: LegacyRef<HTMLDivElement> | undefined
) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <header ref={ref} className={`header ${className ?? ''}`}>
      <div className="header__content">
        <HeaderDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <SvgIconButton
          className="drawer-button"
          SvgComponent={MenuIcon}
          size="large"
          onClick={() => setOpenDrawer(true)}
        />
        <PolybookLogo className="logo" />
        <NavigationBar className="navigation-bar" />
        <SearchBar className="search-bar" />
        <div className={`actions ${className ?? ''}`}>
          <ThemeButton className="actions__button actions__button--theme" />
          <LanguageButton className="actions__button actions__button--language" />
          <SvgIconButton
            className="actions__button actions__button--search"
            SvgComponent={searchIcon}
            onClick={() => {}}
          />
          <SvgIconButton
            className="actions__button actions__button--profile"
            SvgComponent={accountIcon}
            onClick={() => {}}
          />
        </div>
      </div>
    </header>
  );
});

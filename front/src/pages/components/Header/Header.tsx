import './Header.scss';

import { forwardRef, LegacyRef, memo, useState } from 'react';
import accountIcon from 'src/assets/icons/account.svg?react';
import MenuIcon from 'src/assets/icons/menu.svg?react';
import searchIcon from 'src/assets/icons/search.svg?react';
import { SvgIconButton } from 'src/components/IconButton/IconButton';
import LanguageButton from 'src/components/LanguageButton/LanguageButton';
import PolybookLogo from 'src/components/PolybookLogo/PolybookLogo';
import ThemeButton from 'src/components/ThemeButton/ThemeButton';
import AdditionalClassName from 'src/types/IClassName';

import HeaderDrawer from './components/HeaderDrawer/HeaderDrawer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import SearchBar from './components/SearchBar/SearchBar';

interface IHeader extends AdditionalClassName {}

/**
 * Header bar.
 */
const Header = forwardRef(function Header(
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

export default memo(Header);

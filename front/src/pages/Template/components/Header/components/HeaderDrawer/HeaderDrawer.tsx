import './HeaderDrawer.scss';

import CloseIcon from 'src/assets/icons/close.svg?react';
import Drawer, { DrawerAnchoringSide, DrawerProps } from 'src/components/Drawer/Drawer';
import { SvgIconButton } from 'src/components/IconButton/IconButton';
import NavigationBar from 'src/pages/Template/components/Header/components/NavigationBar/NavigationBar';
import LanguageToggleButton from 'src/pages/Template/components/LanguageToggleButton/LanguageToggleButton';
import PolybookLogo from 'src/pages/Template/components/PolybookLogo/PolybookLogo';
import ThemeToggleButton from 'src/pages/Template/components/ThemeToggleButton/ThemeToggleButton';

type HeaderDrawerProps = Omit<DrawerProps, 'children'>;

export default function HeaderDrawer({ className, isOpen, onClose }: HeaderDrawerProps) {
  return (
    <Drawer
      className={className ?? ''}
      contentClassName="header-drawer"
      isOpen={isOpen}
      anchoringSide={DrawerAnchoringSide.Left}
      onClose={onClose}
    >
      <header className="header-drawer-header">
        <PolybookLogo className="header-drawer-header__logo" />
        <SvgIconButton
          className="header-drawer-header__close-button"
          svg={CloseIcon}
          size="large"
          onClick={onClose}
        />
      </header>
      <main className="header-drawer-body">
        <NavigationBar className="header-drawer-body__navigation-bar" />
      </main>
      <footer className="header-drawer-footer">
        <div className="actions">
          <ThemeToggleButton className="actions__button" />
          <LanguageToggleButton className="actions__button" />
        </div>
      </footer>
    </Drawer>
  );
}

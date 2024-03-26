import './HeaderDrawer.scss';

import CloseIcon from 'src/assets/icons/close.svg?react';
import Drawer, { DrawerAnchoringSides, IDrawer } from 'src/components/Drawer/Drawer';
import { SvgIconButton } from 'src/components/IconButton/IconButton';
import LanguageButton from 'src/components/LanguageButton/LanguageButton';
import PolybookLogo from 'src/components/PolybookLogo/PolybookLogo';
import ThemeButton from 'src/components/ThemeButton/ThemeButton';
import NavigationBar from 'src/pages/components/Header/components/NavigationBar/NavigationBar';

type IHeaderDrawer = Omit<IDrawer, 'children'>;

/**
 * Header drawer to display menu on small devices.
 */
export default function HeaderDrawer({ className, open, onClose }: IHeaderDrawer) {
  return (
    <Drawer
      className={className ?? ''}
      contentClassName="header-drawer"
      open={open}
      anchor={DrawerAnchoringSides.Left}
      onClose={onClose}
    >
      <header className="header-drawer-header">
        <PolybookLogo className="header-drawer-header__logo" />
        <SvgIconButton
          className="header-drawer-header__close-button"
          SvgComponent={CloseIcon}
          size="large"
          onClick={onClose}
        />
      </header>
      <main className="header-drawer-body">
        <NavigationBar className="header-drawer-body__navigation-bar" />
      </main>
      <footer className="header-drawer-footer">
        <div className="actions">
          <ThemeButton className="actions__button" />
          <LanguageButton className="actions__button" />
        </div>
      </footer>
    </Drawer>
  );
}

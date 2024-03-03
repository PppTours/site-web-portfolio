import './HeaderDrawer.scss';

import { Drawer } from 'antd';
import { useState } from 'react';

import MenuIcon from '../../../../../assets/icons/menu.svg?react';
import CloseIcon from '../../../../../assets/icons/x-circle.svg?react';
import { SvgIconButton } from '../../../../../components/IconButton/IconButton';
import AdditionalClassName from '../../../../../types/IClassName';
import HeaderActions from '../HeaderActions/HeaderActions';
import HeaderUserProfile from '../HeaderUserProfile/HeaderUserProfile';

type IHeaderDrawer = AdditionalClassName;

/**
 * Header drawer to display menu on small devices.
 */
export default function HeaderDrawer({ className }: IHeaderDrawer) {
  const [open, setOpen] = useState(false);

  /**
   * Open the drawer.
   */
  function openDrawer() {
    setOpen(true);
  }

  /**
   * Close the drawer.
   */
  function closeDrawer() {
    setOpen(false);
  }

  return (
    <>
      <SvgIconButton
        className={`drawer-button ${className ?? ''}`}
        SvgComponent={MenuIcon}
        size="large"
        onClick={openDrawer}
      />
      <Drawer
        rootClassName={`header-drawer ${className ?? ''}`}
        title="Menu"
        getContainer={false}
        open={open}
        onClose={closeDrawer}
      >
        <SvgIconButton
          className="close-button"
          SvgComponent={CloseIcon}
          size="large"
          onClick={closeDrawer}
        />
        <main className="header-drawer__content">
          <h2 className="drawer-title">Menu</h2>
          <HeaderUserProfile className="drawer-profile" signUp={true} />
          <HeaderActions className="drawer-actions" />
        </main>
      </Drawer>
    </>
  );
}

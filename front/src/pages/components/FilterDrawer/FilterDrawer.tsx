import './FilterDrawer.scss';

import { memo } from 'react';
import CloseIcon from 'src/assets/icons/close.svg?react';
import Drawer, { DrawerAnchoringSides } from 'src/components/Drawer/Drawer';
import { SvgIconButton } from 'src/components/IconButton/IconButton';
import AdditionalClassName from 'src/types/IClassName';

export interface IFilterDrawer extends AdditionalClassName {
  /**
   * Whether to open the drawer or not.
   */
  open: boolean;

  /**
   * Function called when the button to close the drawer is clicked.
   */
  onClose: () => void;
}

/**
 * Drawer with filter.
 */
function FilterDrawer({ open, className, onClose }: IFilterDrawer) {
  return (
    <Drawer
      className={`filter-drawer-container ${className ?? ''}`}
      contentClassName={'filter-drawer'}
      open={open}
      anchor={DrawerAnchoringSides.Bottom}
      onClose={onClose}
    >
      <header className="filter-drawer-header">
        <h2 className="filter-drawer-header__title">Filtres</h2>
        <SvgIconButton
          className="filter-drawer-header__close-button"
          SvgComponent={CloseIcon}
          size="large"
          onClick={onClose}
        />
      </header>
    </Drawer>
  );
}

export default memo(FilterDrawer);

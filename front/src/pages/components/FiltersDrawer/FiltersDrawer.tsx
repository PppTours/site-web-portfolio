import './FiltersDrawer.scss';

import CloseIcon from '../../../assets/icons/close.svg?react';
import Drawer, { DrawerAnchoringSides } from '../../../components/Drawer/Drawer';
import { SvgIconButton } from '../../../components/IconButton/IconButton';
import AdditionalClassName from '../../../types/IClassName';

export interface IFiltersDrawer extends AdditionalClassName {
  open: boolean;
  onClose: () => void;
}

export default function FiltersDrawer({ open, className, onClose }: IFiltersDrawer) {
  return (
    <Drawer
      className={`filters-drawer-container ${className ?? ''}`}
      contentClassName={'filters-drawer'}
      open={open}
      anchor={DrawerAnchoringSides.Bottom}
      onClose={onClose}
    >
      <header className="filters-drawer-header">
        <h2 className="filters-drawer-header__title">Filtres</h2>
        <SvgIconButton
          className="filters-drawer-header__close-button"
          SvgComponent={CloseIcon}
          size="large"
          onClick={onClose}
        />
      </header>
    </Drawer>
  );
}

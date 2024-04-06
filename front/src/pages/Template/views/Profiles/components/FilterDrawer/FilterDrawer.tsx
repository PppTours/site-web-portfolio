import './FilterDrawer.scss';

import { memo } from 'react';
import CloseIcon from 'src/assets/icons/close.svg?react';
import Drawer, { DrawerAnchoringSides } from 'src/components/Drawer/Drawer';
import { SvgIconButton } from 'src/components/IconButton/IconButton';
import useTranslation from 'src/hooks/useTranslation';
import { I18nKeys } from 'src/i18n/I18nKeys';
import AdditionalClassName from 'src/types/AdditionalClassName';

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
  const { translate } = useTranslation();

  return (
    <Drawer
      className={`filter-drawer-container ${className ?? ''}`}
      contentClassName={'filter-drawer'}
      open={open}
      anchor={DrawerAnchoringSides.Bottom}
      onClose={onClose}
    >
      <header className="filter-drawer-header">
        <h2 className="filter-drawer-header__title">{translate(I18nKeys.Filters)}</h2>
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

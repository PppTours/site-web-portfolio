import './FilterDrawer.scss';

import { memo } from 'react';
import CloseIcon from 'src/assets/icons/close.svg?react';
import Drawer, { DrawerAnchoringSide } from 'src/components/Drawer/Drawer';
import { SvgIconButton } from 'src/components/IconButton/IconButton';
import useTranslation from 'src/hooks/useTranslation';
import { I18nKey } from 'src/i18n/I18nKey';
import AdditionalClassName from 'src/types/AdditionalClassName';

import Filters, { FiltersProps } from '../Filters/Filters';

export interface FilterDrawerProps extends AdditionalClassName, FiltersProps {
  isOpen: boolean;
  onClose: () => void;
}

function FilterDrawer({
  isOpen,
  filters,
  className,
  onClose,
  onFilterUpdate,
  onFilterApplication
}: FilterDrawerProps) {
  const { translate } = useTranslation();

  function applyFiltersAndClose(): void {
    onFilterApplication();
    onClose();
  }

  return (
    <Drawer
      className={`filter-drawer-container ${className ?? ''}`}
      contentClassName={'filter-drawer'}
      isOpen={isOpen}
      anchoringSide={DrawerAnchoringSide.Right}
      onClose={onClose}
    >
      <header className="filter-drawer-header">
        <h2 className="filter-drawer-header__title">{translate(I18nKey.Filters)}</h2>
        <SvgIconButton
          className="filter-drawer-header__close-button"
          svg={CloseIcon}
          size="large"
          onClick={onClose}
        />
      </header>
      <main className="filter-drawer-content">
        <Filters
          filters={filters}
          onFilterUpdate={onFilterUpdate}
          onFilterApplication={applyFiltersAndClose}
        />
      </main>
    </Drawer>
  );
}

export default memo(FilterDrawer);

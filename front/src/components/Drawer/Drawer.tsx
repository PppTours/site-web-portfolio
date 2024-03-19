import './Drawer.scss';

import { ReactElement, useEffect } from 'react';

import AdditionalClassName from '../../types/IClassName';

/**
 * Drawer anchoring sides.
 */
export enum DrawerAnchoringSides {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}

export interface IDrawer extends AdditionalClassName {
  /**
   * Whether to open the drawer.
   */
  open: boolean;

  /**
   * Drawer anchor side.
   */
  anchor?: DrawerAnchoringSides;

  /**
   * Drawer content.
   */
  children: ReactElement | ReactElement[];

  /**
   * Drawer content additional class name.
   */
  contentClassName?: string;

  /**
   * Function called when closing the drawer.
   */
  onClose: () => void;
}

/**
 * Drawer.
 */
export default function Drawer({
  open,
  anchor = DrawerAnchoringSides.Left,
  children,
  className,
  contentClassName,
  onClose
}: IDrawer) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <div
      className={`drawer ${`drawer--${anchor}`} ${!open ? 'drawer--hidden' : ''} ${className ?? ''}`}
      onClick={onClose}
      onTouchStart={onClose}
    >
      <div
        className={`drawer__content ${`drawer__content--${anchor}`} ${!open ? 'drawer__content--hidden' : ''} ${contentClassName ?? ''}`}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

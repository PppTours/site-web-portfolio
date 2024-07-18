import './Drawer.scss';

import { MouseEvent, TouchEvent } from 'react';
import { ReactElement, useEffect } from 'react';
import AdditionalClassName from 'src/types/AdditionalClassName';

export enum DrawerAnchoringSide {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}

export interface DrawerProps extends AdditionalClassName {
  children: ReactElement | ReactElement[];
  isOpen: boolean;
  anchoringSide?: DrawerAnchoringSide;
  contentClassName?: string;
  onClose: () => void;
}

export default function Drawer({
  isOpen,
  anchoringSide = DrawerAnchoringSide.Left,
  children,
  className,
  contentClassName,
  onClose
}: DrawerProps) {
  function stopEventPropagation(e: MouseEvent | TouchEvent): void {
    e.stopPropagation();
  }

  useEffect(() => {
    function preventPageScrollingWhenOpen(): void {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }

    preventPageScrollingWhenOpen();
  }, [isOpen]);

  return (
    <div
      className={`drawer ${`drawer--${anchoringSide}`} ${isOpen ? '' : 'drawer--hidden'} ${className ?? ''}`}
      onTouchStart={onClose}
    >
      <div
        className={`drawer__content ${`drawer__content--${anchoringSide}`} ${!isOpen ? 'drawer__content--hidden' : ''} ${contentClassName ?? ''}`}
        onClick={stopEventPropagation}
        onTouchStart={stopEventPropagation}
      >
        {children}
      </div>
    </div>
  );
}

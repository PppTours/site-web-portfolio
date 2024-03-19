import './IconButton.scss';

import { Button } from 'antd';
import { BaseButtonProps } from 'antd/es/button/button';

import AdditionalClassName from '../../types/IClassName';
import SvgIcon, { ISvgIcon } from '../SvgIcon/SvgIcon';

interface IButton extends AdditionalClassName, Pick<BaseButtonProps, 'type' | 'size'> {
  /**
   * Function called when the button is clicked.
   */
  onClick: () => void;
}

interface IIconButton extends IButton {
  /**
   * Icon of the button.
   */
  icon: string;
}

type ISvgIconButton = IButton & Pick<ISvgIcon, 'SvgComponent'>;

/**
 * Button with icon.
 */
export default function IconButton({
  icon,
  type = 'text',
  size = 'middle',
  className,
  onClick
}: IIconButton) {
  return (
    <Button
      className={`icon-button language-button ${className ?? ''}`}
      type={type}
      shape="circle"
      onClick={onClick}
      size={size}
      icon={<img className="icon-button__icon" src={icon} />}
    />
  );
}

/**
 * Button with SVG icon.
 */
export function SvgIconButton({
  SvgComponent,
  type = 'text',
  size = 'middle',
  className,
  onClick
}: ISvgIconButton) {
  return (
    <Button
      className={`icon-button language-button ${className ?? ''}`}
      type={type}
      shape="circle"
      onClick={onClick}
      size={size}
      icon={
        <SvgIcon
          className={`icon-button__icon icon-button__icon--${size}`}
          SvgComponent={SvgComponent}
        />
      }
    />
  );
}

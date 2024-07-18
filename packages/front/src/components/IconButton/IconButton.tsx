import './IconButton.scss';

import { Button as AntDesignButton } from 'antd';
import { BaseButtonProps } from 'antd/es/button/button';
import SvgIcon, { SvgIconProps } from 'src/components/SvgIcon/SvgIcon';
import AdditionalClassName from 'src/types/AdditionalClassName';

type AntDesignButtonProps = Pick<BaseButtonProps, 'type' | 'size'>;

interface Button extends AntDesignButtonProps, AdditionalClassName {
  onClick: () => void;
}

interface IconButtonProps extends Button {
  iconSrc: string;
}

export default function IconButton({
  iconSrc,
  type = 'text',
  size = 'middle',
  className,
  onClick
}: IconButtonProps) {
  return (
    <AntDesignButton
      className={`icon-button ${className ?? ''}`}
      type={type}
      shape="circle"
      onClick={onClick}
      size={size}
      icon={<img className="icon-button__icon" src={iconSrc} />}
    />
  );
}

type SvgIconButtonProps = Button & Pick<SvgIconProps, 'svg'>;

export function SvgIconButton({
  svg,
  type = 'text',
  size = 'middle',
  className,
  onClick
}: SvgIconButtonProps) {
  return (
    <AntDesignButton
      className={`icon-button ${className ?? ''}`}
      type={type}
      shape="circle"
      onClick={onClick}
      size={size}
      icon={<SvgIcon className={`icon-button__icon icon-button__icon--${size}`} svg={svg} />}
    />
  );
}

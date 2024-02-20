import './SvgIcon.scss';

import { FunctionComponent, SVGProps } from 'react';

interface ISvgIcon extends SVGProps<SVGSVGElement> {
  /**
   * SVG component.
   */
  SvgComponent: FunctionComponent<SVGProps<SVGSVGElement>>;

  /**
   * Additional classes.
   */
  className?: string;
}

/**
 * SVG icon.
 */
export function SvgIcon({ SvgComponent, className, ...rest }: ISvgIcon) {
  const Component = SvgComponent;
  return <Component className={`svg-icon ${className}`} {...rest} />;
}

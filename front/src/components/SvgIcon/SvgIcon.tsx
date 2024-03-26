import './SvgIcon.scss';

import { FunctionComponent, SVGProps } from 'react';
import AdditionalClassName from 'src/types/IClassName';

export interface ISvgIcon extends SVGProps<SVGSVGElement>, AdditionalClassName {
  /**
   * SVG component.
   */
  SvgComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
}

/**
 * SVG icon.
 */
export default function SvgIcon({ SvgComponent, className, ...rest }: ISvgIcon) {
  const Component = SvgComponent;
  return <Component className={`svg-icon ${className}`} {...rest} />;
}

import './SvgIcon.scss';

import { FunctionComponent, SVGProps } from 'react';
import AdditionalClassName from 'src/types/AdditionalClassName';

export interface SvgIconProps extends SVGProps<SVGSVGElement>, AdditionalClassName {
  svg: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export default function SvgIcon({ svg, className }: SvgIconProps) {
  const SvgComponent = svg;
  return <SvgComponent className={`svg-icon ${className}`} />;
}

import './SvgImage.scss';

import { FunctionComponent, SVGProps } from 'react';
import AdditionalClassName from 'src/types/AdditionalClassName';

export interface SvgImageProps extends SVGProps<SVGSVGElement>, AdditionalClassName {
  svg: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export default function SvgImage({ svg, className }: SvgImageProps) {
  const SvgComponent = svg;
  return <SvgComponent className={`svg-image ${className}`} />;
}

import './Footer.scss';

import { memo } from 'react';
import AdditionalClassName from 'src/types/AdditionalClassName';

type FooterProps = AdditionalClassName;

function Footer({ className }: FooterProps) {
  return <div className={`footer ${className ?? ''}`}></div>;
}

export default memo(Footer);

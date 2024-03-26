import './Footer.scss';

import { memo } from 'react';
import AdditionalClassName from 'src/types/IClassName';

type IFooter = AdditionalClassName;

/**
 * Footer of the page.
 */
function Footer({ className }: IFooter) {
  return <div className={`footer ${className ?? ''}`}></div>;
}

export default memo(Footer);

import './TopBanner.scss';

import { memo } from 'react';
import AdditionalClassName from 'src/types/IClassName';

export interface ITopBanner extends AdditionalClassName {}

/**
 * Banner on the top of the page.
 */
function TopBanner({ className }: ITopBanner) {
  return (
    <div className={`top-banner ${className ?? ''}`}>
      <p className="top-banner__message">Ce site est en cours de construction ...</p>
    </div>
  );
}

export default memo(TopBanner);

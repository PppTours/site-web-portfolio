import './TopBanner.scss';

import AdditionalClassName from '../../../types/IClassName';

export interface ITopBanner extends AdditionalClassName {}

/**
 * Banner on the top of the page.
 */
export default function TopBanner({ className }: ITopBanner) {
  return (
    <div className={`top-banner ${className ?? ''}`}>
      <p className="top-banner__message">Ce site est en cours de construction ...</p>
    </div>
  );
}

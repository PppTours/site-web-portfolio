import './TopBanner.scss';

import { forwardRef, LegacyRef, memo } from 'react';
import AdditionalClassName from 'src/types/AdditionalClassName';

export interface TopBannerProps extends AdditionalClassName {
  children: string;
}

const TopBanner = forwardRef(function TopBanner(
  { children: text, className }: TopBannerProps,
  ref: LegacyRef<HTMLDivElement> | undefined
) {
  return (
    <div ref={ref} className={`top-banner ${className ?? ''}`}>
      <div className="top-banner__content">
        <p className="top-banner__message">{text}</p>
      </div>
    </div>
  );
});

export default memo(TopBanner);

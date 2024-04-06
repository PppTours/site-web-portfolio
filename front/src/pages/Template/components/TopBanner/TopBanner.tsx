import './TopBanner.scss';

import { forwardRef, LegacyRef, memo } from 'react';
import useTranslation from 'src/hooks/useTranslation';
import { I18nKeys } from 'src/i18n/I18nKeys';
import AdditionalClassName from 'src/types/AdditionalClassName';

export interface ITopBanner extends AdditionalClassName {}

/**
 * Banner on the top of the page.
 */
const TopBanner = forwardRef(function TopBanner(
  { className }: ITopBanner,
  ref: LegacyRef<HTMLDivElement> | undefined
) {
  const { translate } = useTranslation();

  return (
    <div ref={ref} className={`top-banner ${className ?? ''}`}>
      <p className="top-banner__message">{translate(I18nKeys.TopBannerMessage)}</p>
    </div>
  );
});

export default memo(TopBanner);

import './TopBanner.scss';

import { memo } from 'react';
import useTranslation from 'src/hooks/useTranslation';
import { I18nKeys } from 'src/i18n/I18nKeys';
import AdditionalClassName from 'src/types/AdditionalClassName';

export interface ITopBanner extends AdditionalClassName {}

/**
 * Banner on the top of the page.
 */
function TopBanner({ className }: ITopBanner) {
  const { translate } = useTranslation();

  return (
    <div className={`top-banner ${className ?? ''}`}>
      <p className="top-banner__message">{translate(I18nKeys.TopBannerMessage)}</p>
    </div>
  );
}

export default memo(TopBanner);

import './UnknownErrorView.scss';

import { Button } from 'antd';
import SvgImage from 'src/components/SvgImage/SvgImage';
import useTranslation from 'src/hooks/useTranslation';
import { I18nKey } from 'src/i18n/I18nKey';

import { RouterError } from '../../hooks/useRouterError';

export interface UnknownErrorViewProps {
  error: RouterError;
}

export default function UnknownErrorView({ error }: UnknownErrorViewProps) {
  const { translate } = useTranslation();

  function reloadPage(): void {
    window.location.reload();
  }

  return (
    <div className="unknown-error-view">
      <SvgImage className="unknown-error-view__image" svg={error.image} />
      <h1 className="unknown-error-view__title">{error.title}</h1>
      <p className="unknown-error-view__subtitle">{error.subtitle}</p>

      <Button
        className="unknown-error-view__button"
        type="primary"
        size="large"
        onClick={reloadPage}
      >
        {translate(I18nKey.Reload)}
      </Button>
    </div>
  );
}

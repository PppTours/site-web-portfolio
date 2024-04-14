import './NotFoundView.scss';

import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import SvgImage from 'src/components/SvgImage/SvgImage';
import useTranslation from 'src/hooks/useTranslation';
import { I18nKey } from 'src/i18n/I18nKey';
import RouterLink from 'src/router/RouterLink';

import { RouterError } from '../../hooks/useRouterError';

export interface NotFoundViewProps {
  error: RouterError;
}

export default function NotFoundView({ error }: NotFoundViewProps) {
  const { translate } = useTranslation();
  const navigate = useNavigate();

  function navigateToHome() {
    navigate(RouterLink.Home);
  }

  return (
    <div className="not-found-view">
      <SvgImage className="not-found-view__image" svg={error.image} />
      {/* <img className="not-found-view__image" src={error.image} alt={error.title} /> */}
      <h1 className="not-found-view__title">{error.title}</h1>
      <p className="not-found-view__subtitle">{error.subtitle}</p>

      <Button
        className="not-found-view__button"
        type="primary"
        size="large"
        onClick={navigateToHome}
      >
        {translate(I18nKey.Home)}
      </Button>
    </div>
  );
}

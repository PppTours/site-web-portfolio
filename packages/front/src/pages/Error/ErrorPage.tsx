import './ErrorPage.scss';

import useRouterError, { RouterErrorType } from './hooks/useRouterError';
import NotFoundView from './views/NotFound/NotFoundView';
import UnknownErrorView from './views/UnknownError/UnknownErrorView';

export default function ErrorPage() {
  const routerError = useRouterError();

  return (
    <div className="error-page">
      {routerError.type === RouterErrorType.NotFound && <NotFoundView error={routerError} />}
      {routerError.type === RouterErrorType.Unknown && <UnknownErrorView error={routerError} />}
    </div>
  );
}

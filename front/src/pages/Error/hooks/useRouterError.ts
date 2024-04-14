import { FunctionComponent, SVGProps } from 'react';
import { useRouteError } from 'react-router-dom';
import useTranslation from 'src/hooks/useTranslation';
import { I18nKey } from 'src/i18n/I18nKey';

import notFoundImage from '/src/assets/images/errors/404.svg?react';
import unknownErrorImage from '/src/assets/images/errors/error.svg?react';

interface ReactRouterError {
  status: number;
}

export enum RouterErrorType {
  NotFound = 'not-found',
  Unknown = 'unknown'
}

export interface RouterError {
  type: RouterErrorType;
  title: string;
  subtitle: string;
  image: FunctionComponent<SVGProps<SVGSVGElement>>;
}

interface ErrorTranslationFields {
  title: I18nKey;
  subtitle: I18nKey;
}

const errorTranslationKeys: Record<RouterErrorType, ErrorTranslationFields> = {
  [RouterErrorType.NotFound]: {
    title: I18nKey.NotFoundErrorTitle,
    subtitle: I18nKey.NotFoundErrorSubtitle
  },
  [RouterErrorType.Unknown]: {
    title: I18nKey.UnknownErrorTitle,
    subtitle: I18nKey.UnknownErrorSubtitle
  }
};

const errorImages: Record<RouterErrorType, FunctionComponent<SVGProps<SVGSVGElement>>> = {
  [RouterErrorType.NotFound]: notFoundImage,
  [RouterErrorType.Unknown]: unknownErrorImage
};

export default function useRouterError(): RouterError {
  const { translate } = useTranslation();
  const routerError = useRouteError() as ReactRouterError;
  const routerErrorType = getRouterErrorType(routerError);

  function getRouterErrorType(error: ReactRouterError): RouterErrorType {
    if (error.status === 404) {
      return RouterErrorType.NotFound;
    } else {
      return RouterErrorType.Unknown;
    }
  }

  function getErrorFromType(errorType: RouterErrorType): RouterError {
    return {
      type: errorType,
      title: translate(errorTranslationKeys[errorType].title),
      subtitle: translate(errorTranslationKeys[errorType].subtitle),
      image: errorImages[errorType]
    };
  }

  return getErrorFromType(routerErrorType);
}

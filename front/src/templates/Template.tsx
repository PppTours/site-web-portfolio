import './Template.scss';

import { createContext, ReactElement, RefObject, useEffect, useRef } from 'react';
import useTheme from 'src/hooks/useTheme';
import useTranslation from 'src/hooks/useTranslation';
import useWindowResizing from 'src/hooks/useWindowResizing';
import { I18nKey } from 'src/i18n/I18nKey';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TopBanner from './components/TopBanner/TopBanner';

interface TemplateContextProps {
  headerRef: RefObject<HTMLDivElement> | undefined;
}

export const TemplateContext = createContext<TemplateContextProps>({
  headerRef: undefined
});

interface TemplateProps {
  children: ReactElement;
}

export default function Template({ children }: TemplateProps) {
  const theme = useTheme();
  const topBannerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const isWindowResizing = useWindowResizing();
  const { translate } = useTranslation();

  useEffect(() => {
    function resizeMinimumBodyHeight(): void {
      const topBannerHeight = topBannerRef.current?.clientHeight ?? 0;
      const headerHeight = headerRef.current?.clientHeight ?? 0;
      const topBannerAndHeaderHeight = topBannerHeight + headerHeight;

      bodyRef.current?.setAttribute(
        'style',
        `min-height: calc(100dvh - ${topBannerAndHeaderHeight}px)`
      );
    }

    if (!isWindowResizing) resizeMinimumBodyHeight();
  }, [topBannerRef, headerRef, bodyRef, isWindowResizing]);

  return (
    <div className={`theme theme--${theme}`}>
      <div className="template">
        <TopBanner ref={topBannerRef} className="template__top-banner">
          {translate(I18nKey.TopBannerMessage)}
        </TopBanner>
        <Header ref={headerRef} className="template__header" />
        <main ref={bodyRef} className="template__body">
          <TemplateContext.Provider value={{ headerRef }}>{children}</TemplateContext.Provider>
        </main>
        <Footer className="template__footer" />
      </div>
    </div>
  );
}

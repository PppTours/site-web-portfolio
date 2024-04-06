import './TemplatePage.scss';

import { useEffect, useRef } from 'react';
import useWindowResizing from 'src/hooks/useWindowResizing';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TopBanner from './components/TopBanner/TopBanner';
import ProfileView from './views/Profiles/ProfileView';

export default function TemplatePage() {
  const topBannerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const isWindowResizing = useWindowResizing();

  useEffect(() => {
    /**
     * Resize minimum body height.
     */
    function resizeMinimumBodyHeight() {
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
    <div className="template-page">
      <TopBanner ref={topBannerRef} className="template-page__top-banner" />
      <Header ref={headerRef} className="template-page__header" />
      <main ref={bodyRef} className="template-page__body">
        <ProfileView headerRef={headerRef} />
      </main>
      <Footer className="template-page__footer" />
    </div>
  );
}

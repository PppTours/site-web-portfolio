import '../assets/style/utils/_debug.scss';
import './App.scss';

import { Reducer, useEffect, useReducer, useRef, useState } from 'react';

import { LanguagesEnum } from '../contexts/LanguageContext';
import Provider from '../providers/Provider';
import reducer, { AppAction, AppState } from '../reducers/Reducer';
import { ThemesEnum } from '../themes/ThemesEnum';
import FiltersDisplayButton from './components/FiltersDisplayButton/FiltersDisplayButton';
import FiltersDrawer from './components/FiltersDrawer/FiltersDrawer';
import { FiltersMenu } from './components/FiltersMenu/FiltersMenu';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import ProfileGrid from './components/ProfileGrid/ProfileGrid';
import TopBanner from './components/TopBanner/TopBanner';

/**
 * Polybook app.
 */
export default function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const filtersMenuRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [displayFilters, setDisplayFilters] = useState<boolean>(false);
  const [displayFiltersDrawer, setDisplayFiltersDrawer] = useState<boolean>(false);
  const [state, dispatch] = useReducer<Reducer<AppState, AppAction>>(reducer, {
    theme: ThemesEnum.Light,
    language: LanguagesEnum.French
  });

  useEffect(() => {
    function updateHeaderHeight() {
      const height = headerRef.current?.getBoundingClientRect().bottom ?? 0;
      if (height !== headerHeight) setHeaderHeight(height);
    }

    bodyRef.current?.setAttribute('style', `min-height: calc(100dvh - ${headerHeight}px)`);
    filtersMenuRef.current?.setAttribute('style', `max-height: calc(100dvh - ${headerHeight}px)`);

    window.addEventListener('scroll', updateHeaderHeight);

    return () => window.removeEventListener('scroll', updateHeaderHeight);
  }, [headerHeight]);

  useEffect(() => {
    function updateFiltersDisplay() {
      setDisplayFiltersDrawer(
        (filtersMenuRef.current ? getComputedStyle(filtersMenuRef.current).display : 'null') ===
          'none'
      );
    }

    updateFiltersDisplay();
    window.addEventListener('resize', updateFiltersDisplay);

    return () => window.removeEventListener('resize', updateFiltersDisplay);
  }, [displayFilters]);

  return (
    <Provider theme={state.theme} language={state.language} dispatch={dispatch}>
      <div className={`theme theme--${state.theme}`}>
        <div className="app">
          <TopBanner />
          <Header ref={headerRef} className="app__header" />
          <div
            ref={bodyRef}
            className={`app__body ${!displayFilters ? 'app__body--filters-hidden' : ''}`}
          >
            <FiltersMenu ref={filtersMenuRef} className="filters" hidden={!displayFilters} />
            <div className="profiles">
              <div className="profiles-header">
                <FiltersDisplayButton
                  className="profiles__header"
                  onClick={() => setDisplayFilters(!displayFilters)}
                />
              </div>
              <ProfileGrid className="profiles__catalog" />
            </div>
          </div>
          <Footer className="app__footer app-section" />
          <FiltersDrawer
            className="app__filters-drawer"
            open={displayFilters && displayFiltersDrawer}
            onClose={() => setDisplayFilters(false)}
          />
        </div>
      </div>
    </Provider>
  );
}

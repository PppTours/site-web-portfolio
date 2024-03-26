import 'src/assets/style/utils/_debug.scss';
import './App.scss';

import { Reducer, useCallback, useEffect, useReducer, useState } from 'react';
import { LanguagesEnum } from 'src/contexts/LanguageContext';
import Provider from 'src/providers/Provider';
import reducer, { AppAction, AppState } from 'src/reducers/Reducer';
import { ThemesEnum } from 'src/themes/ThemesEnum';

import FilterDisplayButton from './components/FilterDisplayButton/FilterDisplayButton';
import FilterDrawer from './components/FilterDrawer/FilterDrawer';
import FilterMenu from './components/FilterMenu/FilterMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProfileGrid from './components/ProfileGrid/ProfileGrid';
import TopBanner from './components/TopBanner/TopBanner';
import useAppRefs from './hooks/useAppRefs';

/**
 * Polybook app.
 */
export default function App() {
  const refs = useAppRefs();
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [displayFilters, setDisplayFilters] = useState<boolean>(false);
  const [displayFilterDrawer, setDisplayFilterDrawer] = useState<boolean>(false);
  const [state, dispatch] = useReducer<Reducer<AppState, AppAction>>(reducer, {
    theme: ThemesEnum.Light,
    language: LanguagesEnum.French
  });

  /**
   * Handle filter display.
   * @param {boolean} display Whether to display filters or not.
   */
  const handleFilterDisplay = useCallback((display: boolean) => setDisplayFilters(display), []);

  /**
   * Handle filter drawer closure.
   */
  const handleFilterDrawerClosure = useCallback(() => setDisplayFilters(false), []);

  useEffect(() => {
    /**
     * Update header height.
     */
    function updateHeaderHeight(): void {
      const height = refs.header.current?.getBoundingClientRect().bottom ?? 0;
      if (height !== headerHeight) setHeaderHeight(height);
    }

    refs.body.current?.setAttribute('style', `min-height: calc(100dvh - ${headerHeight}px)`);
    refs.filterMenu.current?.setAttribute('style', `max-height: calc(100dvh - ${headerHeight}px)`);

    window.addEventListener('scroll', updateHeaderHeight);

    return () => window.removeEventListener('scroll', updateHeaderHeight);
  }, [headerHeight, refs]);

  useEffect(() => {
    /**
     * Update filter display.
     */
    function updateFilterDisplay(): void {
      setDisplayFilterDrawer(
        (refs.filterMenu.current ? getComputedStyle(refs.filterMenu.current).display : 'null') ===
          'none'
      );
    }

    updateFilterDisplay();
    window.addEventListener('resize', updateFilterDisplay);

    return () => window.removeEventListener('resize', updateFilterDisplay);
  }, [displayFilters, refs.filterMenu]);

  return (
    <Provider theme={state.theme} language={state.language} dispatch={dispatch}>
      <div className={`theme theme--${state.theme}`}>
        <div className="app">
          <TopBanner />
          <Header ref={refs.header} className="app__header" />
          <div
            ref={refs.body}
            className={`app__body ${!displayFilters ? 'app__body--filter-hidden' : ''}`}
          >
            <FilterMenu ref={refs.filterMenu} className="filter" hidden={!displayFilters} />
            <div className="profiles">
              <div className="profiles__header">
                <FilterDisplayButton initialValue={displayFilters} onClick={handleFilterDisplay} />
              </div>
              <ProfileGrid className="profiles__catalog" />
            </div>
          </div>
          <Footer className="app__footer app-section" />
          <FilterDrawer
            className="app__filter-drawer"
            open={displayFilters && displayFilterDrawer}
            onClose={handleFilterDrawerClosure}
          />
        </div>
      </div>
    </Provider>
  );
}

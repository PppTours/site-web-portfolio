import './NavigationBar.scss';

import AdditionalClassName from '../../../../../types/IClassName';

export type INavigationBar = AdditionalClassName;

/**
 * Navigation bar.
 */
export default function NavigationBar({ className }: INavigationBar) {
  return (
    <nav className={`navigation-bar ${className ?? ''}`}>
      <ul className="navigation-bar-menu">
        <li className="navigation-bar-menu-page">
          <a className="navigation-bar-menu-page__link" href="#">
            Accueil
          </a>
        </li>
        <li className="navigation-bar-menu-page">
          <a className="navigation-bar-menu-page__link" href="#">
            Profils
          </a>
        </li>
        <li className="navigation-bar-menu-page">
          <a className="navigation-bar-menu-page__link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

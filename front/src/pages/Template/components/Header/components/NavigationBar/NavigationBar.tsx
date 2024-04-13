import './NavigationBar.scss';

import { useTranslation } from 'react-i18next';
import AdditionalClassName from 'src/types/AdditionalClassName';

export type NavigationBarProps = AdditionalClassName;

export default function NavigationBar({ className }: NavigationBarProps) {
  const { t: translate } = useTranslation();

  return (
    <nav className={`navigation-bar ${className ?? ''}`}>
      <ul className="navigation-bar-menu">
        <li className="navigation-bar-menu-page">
          <a className="navigation-bar-menu-page__link" href="#">
            {translate('home')}
          </a>
        </li>
        <li className="navigation-bar-menu-page">
          <a className="navigation-bar-menu-page__link" href="#">
            {translate('profiles')}
          </a>
        </li>
        <li className="navigation-bar-menu-page">
          <a className="navigation-bar-menu-page__link" href="#">
            {translate('contact')}
          </a>
        </li>
      </ul>
    </nav>
  );
}

import './NavigationBar.scss';

import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { I18nKey } from 'src/i18n/I18nKey';
import RouterLink from 'src/router/RouterLink';
import AdditionalClassName from 'src/types/AdditionalClassName';

interface NavigationLink {
  href: RouterLink;
  translationKey: I18nKey;
}

const navigationLinks: NavigationLink[] = [
  {
    href: RouterLink.Home,
    translationKey: I18nKey.Home
  },
  {
    href: RouterLink.StudentCatalog,
    translationKey: I18nKey.Profiles
  },
  {
    href: RouterLink.Contact,
    translationKey: I18nKey.Contact
  }
];

export interface NavigationBarProps extends AdditionalClassName {
  onLinkClick?: () => void;
}

export default function NavigationBar({ onLinkClick, className }: NavigationBarProps) {
  const { t: translate } = useTranslation();

  return (
    <nav className={`navigation-bar ${className ?? ''}`}>
      <ul className="navigation-bar-menu">
        {navigationLinks.map((link, index) => (
          <li key={index} className="navigation-bar-menu-item">
            <NavLink
              className={({ isActive }) =>
                [
                  'navigation-bar-menu-item__link',
                  isActive ? 'navigation-bar-menu-item__link--active' : ''
                ].join(' ')
              }
              to={link.href}
              onClick={onLinkClick}
            >
              {translate(link.translationKey)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

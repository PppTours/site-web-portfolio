import { createBrowserRouter, Outlet } from 'react-router-dom';

import ContactPage from '../pages/Contact/ContactPage';
import ErrorPage from '../pages/Error/ErrorPage';
import HomePage from '../pages/Home/HomePage';
import ProfileSearchPage from '../pages/ProfileSearch/ProfileSearchPage';
import Template from '../templates/Template';
import RouterLink from './RouterLink';

const router = createBrowserRouter([
  {
    path: RouterLink.Home,
    caseSensitive: true,
    element: (
      <Template>
        <Outlet />
      </Template>
    ),
    errorElement: (
      <Template>
        <ErrorPage />
      </Template>
    ),
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: RouterLink.Profiles,
        element: <ProfileSearchPage />
      },
      {
        path: RouterLink.Contact,
        element: <ContactPage />
      }
    ]
  }
]);

export default router;

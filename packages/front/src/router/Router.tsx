import { createBrowserRouter, Outlet } from 'react-router-dom';

import ContactPage from '../pages/Contact/ContactPage';
import ErrorPage from '../pages/Error/ErrorPage';
import HomePage from '../pages/Home/HomePage';
import StudentCatalogPage from '../pages/StudentCatalog/StudentCatalog';
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
        path: RouterLink.StudentCatalog,
        element: <StudentCatalogPage />
      },
      {
        path: RouterLink.Contact,
        element: <ContactPage />
      }
    ]
  }
]);

export default router;

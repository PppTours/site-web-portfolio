import './assets/style/index.scss';
import './i18n/i18n';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import App from './App';
import router from './router/Router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <App>
    <RouterProvider router={router} />
  </App>
);

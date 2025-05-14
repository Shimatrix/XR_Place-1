import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import { App } from './components/app';
import Providers from './providers';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);

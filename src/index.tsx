import React from 'react';
import ReactDOM from 'react-dom/client';

import './Assets/Css/index'

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Contexts/Auth/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

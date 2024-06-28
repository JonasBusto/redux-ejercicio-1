import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PrimeReactProvider>
          <App />
        </PrimeReactProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

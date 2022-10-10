import './assets/styles/style.scss';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore();

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
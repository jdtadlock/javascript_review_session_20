// BOOTSTRAP FILE -- The file that begins the React Process in the browser

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom'; // export const 
//BrowserRouter = ....

import { Provider } from './store';

import axios from 'axios';

axios.interceptors.request.use(config => {
  let token = localStorage.getItem('token');

  config.headers.auth_token = token;
  return config;
});


ReactDOM.render((
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

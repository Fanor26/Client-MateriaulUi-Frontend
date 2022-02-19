import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import Axios from 'axios'

Axios.defaults.baseURL='https://backend-escuelitas.herokuapp.com/'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



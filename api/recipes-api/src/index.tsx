import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);
reportWebVitals();

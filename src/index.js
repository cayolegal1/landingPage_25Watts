import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ReactGA from 'react-ga';

const TRACKING_ID = "270953556";

ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


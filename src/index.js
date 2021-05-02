import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-QLR6PC1TVJ";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactGA.initialize(TRACKING_ID);
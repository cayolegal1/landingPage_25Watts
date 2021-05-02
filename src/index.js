import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ReactGA from 'react-ga';
import TRACKING_ID from './App'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactGA.initialize(TRACKING_ID);
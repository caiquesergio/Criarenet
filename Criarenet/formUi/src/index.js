import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './features/App';
import * as serviceWorker from './core/worker/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

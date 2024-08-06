import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import store from './app/store'; 
import { Provider } from 'react-redux';

import 'antd/dist/reset.css';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

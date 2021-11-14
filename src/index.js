import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import Store from './app/store';
import MainApp from './app/MainApp';


ReactDOM.render(
   <Provider store={Store}>
      <MainApp/>
   </Provider>,
   document.getElementById('root')
);

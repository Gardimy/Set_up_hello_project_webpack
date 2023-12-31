import "@hotwired/turbo-rails"
import "./controllers";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './component/App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    
      <App />
   
  </Provider>,
);
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';    //import createStore
import { Provider } from 'react-redux'; //provider will attach react with redux
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; //import bootstrap 
import reminderReducer from './redux/reducer'; //import the reducer (reminderReducer) from the reducer file
const store = createStore(reminderReducer); //create store and pass the reducer as param

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

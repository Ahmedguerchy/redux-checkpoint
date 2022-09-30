import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// Provider  connect all the states to the store
import {Provider} from 'react-redux'
//creatoreStore combines all the state in one file
import {createStore} from 'redux'
import rootReducer from './reducers'
// import * as serviceWorker from './serviceWorker'

const store=createStore(rootReducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

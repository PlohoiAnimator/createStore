import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App.jsx';

const defaultState = {
  cash: 0
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_CASH':
      return {...state, cash: state.cash + action.payload}
    case 'GET_CASH':
      return {...state, cash: state.cash - action.payload}
    case 'MULTIPY_CASH':
      return {...state, cash: state.cash * action.payload}
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,

  document.getElementById('root')
);

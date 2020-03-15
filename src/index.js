import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import rootReducer from './reducers';
import './index.css';

// const logger = function({ dispatch, getState }) {
//   return function(next) {
//     return function(action) {
//       // my middlware
//       console.log('ACTION', action);
//       next(action);
//     };
//   };
// };

const logger = ({ dispatch, getState }) => next => action => {
  // my middlware
  console.log('ACTION', action);
  next(action);
};

const store = createStore(rootReducer, applyMiddleware(logger));
// console.log(store);
console.log('state', store.getState());

// update store by dispatching actions
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: moviesList
// });
// console.log('state', store.getState());

ReactDOM.render(<App store={store} />, document.getElementById('root'));

import { createStore } from 'redux';
import reducer from './reducers';

import { compose, applyMiddleware } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware()));

export default store;

import { combineReducers } from 'redux';
import counter from './burgerBuilder';
import order from './order';

export default combineReducers({
  counter: counter,
  order: order,
});

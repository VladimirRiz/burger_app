import { combineReducers } from 'redux';
import counter from './burgerBuilder';

export default combineReducers({
  counter: counter,
});

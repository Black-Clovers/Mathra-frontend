import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';

export const reducers = combineReducers({
  // Add reducers here
  loginId: LoginReducer,
});

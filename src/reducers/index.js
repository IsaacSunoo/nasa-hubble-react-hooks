import { combineReducers } from 'redux';
import { error } from './error';
import { loading } from './loading';

export const rootReducer = combineReducers({
  loading,
  error
});
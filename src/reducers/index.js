import { combineReducers } from 'redux';
import { error } from './error';
import { loading } from './loading';
import { daily } from './daily';

export const rootReducer = combineReducers({
  loading,
  error,
  daily
});
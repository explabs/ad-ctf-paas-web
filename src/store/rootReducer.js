import { combineReducers } from '@reduxjs/toolkit';
import auth from '../features/auth/store';
import core from './core';

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    auth,
    core,
    ...asyncReducers,
  });

  if (action.type === 'auth/user/userLoggedOut') {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;

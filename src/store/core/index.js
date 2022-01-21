import { combineReducers } from '@reduxjs/toolkit';
import dialog from './dialogSlice';
import message from './messageSlice';

const reducers = combineReducers({
  message,
  dialog,
});

export default reducers;

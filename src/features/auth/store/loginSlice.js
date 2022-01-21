import { createSlice } from '@reduxjs/toolkit';
import jwtService from '../../../services/jwtService';
import { setUserData } from './userSlice';

const loginSlice = createSlice({
  name: 'auth/login',
  initialState: {
    success: false,
    errors: [],
  },
  reducers: {
    loginSuccess: (state, _) => {
      state.success = true;
      state.errors = [];
    },
    loginError: (state, action) => {
      state.success = false;
      state.errors = action.payload;
    },
  },
  extraReducers: {},
});

export const { loginSuccess, loginError } = loginSlice.actions;

export const submitLogin = ({ username, password }) => async (dispatch) => jwtService
  .signInWithUsernameAndPassword(username, password)
  .then((token) => {
    dispatch(setUserData(token, '/'));

    return dispatch(loginSuccess());
  })
  .catch((errors) => dispatch(loginError(errors || [])));

export default loginSlice.reducer;

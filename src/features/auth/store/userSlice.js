import router from 'next/router';
import { createSlice } from '@reduxjs/toolkit';
import jwtService from '../../../services/jwtService';

const initialState = {
  id: 'Гость',
  name: '',
  mode: '',
  address: '',
};

const userSlice = createSlice({
  name: 'auth/user',
  initialState,
  reducers: {
    setUser: (state, action) => action.payload,
    userLoggedOut: () => initialState,
  },
  extraReducers: {},
});

export const { setUser, userLoggedOut } = userSlice.actions;

export const setUserData = (user, redirectUrl) => async (dispatch) => {
  dispatch(setUser(user));
  await router.push(redirectUrl || '/');
  // await router.push(redirectUrl || '/');
};

export const logoutUser = () => async (dispatch, getState) => {
  const { user } = getState().auth;

  if (user.id === 'Гость') {
    return null;
  }

  // await router.push('/');

  jwtService.logout();

  return dispatch(userLoggedOut());
};

export default userSlice.reducer;

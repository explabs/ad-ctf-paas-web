import { createSlice } from '@reduxjs/toolkit';
import router from 'next/router';
import jwtService from '../../../services/jwtService';

const initialState = {
  success: false,
  errors: [],
};

const registerSlice = createSlice({
  name: 'auth/register',
  initialState,
  reducers: {
    registerSuccess: (state) => {
      state.success = true;
      state.errors = [];
    },
    registerError: (state, action) => {
      state.success = false;
      state.errors = action.payload || [];
    },
  },
  extraReducers: {},
});

export const { registerSuccess, registerError } = registerSlice.actions;

export const submitRegister = ({ name, password, ssh_pub_key }) => async (dispatch) => jwtService
  .createUser(name, password, ssh_pub_key)
  .then(async () => {
    await router.push('/login');

    return dispatch(registerSuccess());
  })
  .catch((errors) => dispatch(registerError(errors)));

export default registerSlice.reducer;

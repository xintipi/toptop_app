import { createSlice } from '@reduxjs/toolkit';

import { State } from '@/store';

import { reducers } from './reducers';
import { initialState } from './state';

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers,
});

// able to use reducers we need to export them.
export const { onLogIn } = slice.actions;

export const selectLogged = (state: State) => state.auth.hasLogged;

export default slice.reducer;

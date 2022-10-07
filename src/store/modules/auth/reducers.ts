import { PayloadAction } from '@reduxjs/toolkit';

import { IState } from './state';

export const reducers = {
  onLogIn: (state: IState, action: PayloadAction<boolean>) => {
    state.hasLogged = action.payload;
  },
};

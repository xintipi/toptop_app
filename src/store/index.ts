import { configureStore } from '@reduxjs/toolkit';

import { ReduxTypeEnum } from '@/enums';

import auth from './modules/auth/slice';

const middlewareConfiguration = { serializableCheck: false };

const store = configureStore({
  reducer: {
    auth,
  },
  devTools: {
    name: ReduxTypeEnum.Type,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareConfiguration),
});

export type State = ReturnType<typeof store.getState>;

export default store;

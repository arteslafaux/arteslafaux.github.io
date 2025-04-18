import type {
  ThunkAction,
  Action
} from '@reduxjs/toolkit';
import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import type {
  PersistConfig,
  Persistor
} from 'redux-persist';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import storageSession from 'redux-persist/lib/storage/session';
import { encryptTransform } from 'redux-persist-transform-encrypt';

const rootReducer = combineReducers({

});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<RootState> = {
  key: 'persistApp',
  version: 1,
  storage,
  whitelist: [ 'authSlice' ],
  transforms: [
    encryptTransform({
      secretKey: import.meta.env.VITE_API_PERSIST_KEY || 'your-secret-key',
      onError: (error) => {
        console.error('Encryption error:', error);
      },
    }),
  ],
}

export const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
      },
    }),
});

export const persistor: Persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

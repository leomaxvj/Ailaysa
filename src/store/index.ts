import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import authReducer from '../features/auth/authSlice';
import projectReducer from '../features/project/projectSlice';
import translationReducer from '../features/translation/translationSlice';
import glossaryReducer from '../features/glossary/glossarySlice';
import exampleReducer from '../features/examples/exampleSlice';
import uiReducer from '../features/ui/uiSlice';

// SSR compatible storage fallback
const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  translation: translationReducer,
  glossary: glossaryReducer,
  example: exampleReducer,
  ui: uiReducer,
});

const persistConfig = {
  key: 'ailaysa-store',
  storage,
  whitelist: ['project', 'glossary', 'example'], // Persist these features
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

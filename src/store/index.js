import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './transactions/slice';
import { KEY_LOCALSTORAGE_TRANSACTION } from '../constants';

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem(
    KEY_LOCALSTORAGE_TRANSACTION,
    JSON.stringify(store.getState())
  );
};

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware);
  },
});

import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './transactions/slice';

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem('transacciones', JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware);
  },
});

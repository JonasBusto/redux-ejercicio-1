import { createSlice } from '@reduxjs/toolkit';
import { ARRAY_TRANSACTIONS } from '../../constants';

const initialState = (() => {
  const persistedState = localStorage.getItem('transacciones');

  if (persistedState) {
    return JSON.parse(persistedState).transactions;
  }

  return ARRAY_TRANSACTIONS;
})();

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    deleteTransactionById: (state, action) => {
      const id = action.payload;
      return state.filter((transaction) => transaction.id !== id);
    },
    addNewTransaction: (state, action) => {
      return [...state, { id: crypto.randomUUID(), ...action.payload }];
    },
    changeTransaction: (state, action) => {
      const { id } = action.payload;
      return state.map((transaction) =>
        transaction.id === id ? action.payload : transaction
      );
    },
  },
});

export default transactionSlice.reducer;
export const { deleteTransactionById, addNewTransaction, changeTransaction } =
  transactionSlice.actions;

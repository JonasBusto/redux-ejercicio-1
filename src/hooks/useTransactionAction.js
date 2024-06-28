import {
  addNewTransaction,
  changeTransaction,
  deleteTransactionById,
} from '../store/transactions/slice';
import { useAppDisptach } from './store';

export function useTransactionAction() {
  const dispatch = useAppDisptach();

  const removeTransaction = (id) => {
    dispatch(deleteTransactionById(id));
  };

  const addTransaction = (transaction) => {
    dispatch(addNewTransaction(transaction));
  };

  const updateTransaction = (transaction) => {
    dispatch(changeTransaction(transaction));
  };

  return {
    removeTransaction,
    addTransaction,
    updateTransaction,
  };
}

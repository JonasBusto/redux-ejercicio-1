import { useAppSelector } from '../hooks/store';

export function Summary() {
  const transactions = useAppSelector((state) => state.transactions);

  const summary = transactions.reduce(
    (accumulator, transaction) => accumulator + Number(transaction.monto),
    0
  );

  return (
    <div className='summary-items d-flex flex-column align-items-center'>
      <p>Total transacciones: {transactions.length}</p>
      <p>Total generado: {summary.toFixed(2)} $</p>
    </div>
  );
}

export function TransactionItem({ transaction, index }) {
  return (
    <span className='d-flex justify-content-center'>
      <p>{index + 1}</p>
      <p className='d-flex flex-column'>
        <span>{transaction.descripcion}</span>
        <span className='d-flex justify-content-between'>
          <span>
            <span className='span-category'>
              {'Categoria: ' + transaction.categoria}
            </span>
            <span className='span-modality'>
              {'Modalidad: ' + transaction.modalidad}
            </span>
          </span>
          <span className='span-monto'>
            {Number(transaction.monto).toFixed(2) + ' $'}
          </span>
        </span>
      </p>
    </span>
  );
}

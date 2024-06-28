import { useAppSelector } from '../hooks/store';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import { useTransactionAction } from '../hooks/useTransactionAction';
import { TRANSACTIONS_CATEGORY, TRANSACTIONS_MODALITY } from '../constants';
import { format } from '@formkit/tempo';

export function Transactions() {
  const transactions = useAppSelector((state) => state.transactions);
  const { removeTransaction } = useTransactionAction();

  const actionItem = (item) => {
    return (
      <span className='btn-actions d-flex'>
        <Link to={'/transacciones/cargar/' + item.id}>
          <i className='fa-solid fa-pencil'></i>
        </Link>
        <button onClick={() => removeTransaction(item.id)}>
          <i className='fa-solid fa-trash-can'></i>
        </button>
      </span>
    );
  };

  const bodyDate = (item) => {
    const [year, month, day] = item.fecha.slice(0, 10).split('-');

    const date = new Date(Number(year), Number(month) - 1, Number(day));
    const formatDate = format(date, 'full');

    return <span>{formatDate}</span>;
  };

  const bodyMonto = (item) => {
    return <span>{Number(item.monto).toFixed(2) + ' $'}</span>;
  };

  return (
    <div className='d-flex flex-column contain-datatable'>
      <div className='btn-add d-flex justify-content-between align-items-center'>
        <p>Listado de transacciones</p>
        <Link to='/transacciones/cargar'>Agregar</Link>
      </div>
      <DataTable
        className='list-items'
        value={transactions}
        tableStyle={{ minWidth: '50rem' }}
      >
        <Column field='descripcion' header='Descripción'></Column>
        <Column body={bodyMonto} header='Monto'></Column>
        <Column field='categoria' header='Categoria'></Column>
        <Column
          body={bodyDate}
          header='Fecha'
          style={{ minWidth: '270px' }}
        ></Column>
        <Column field='modalidad' header='Modalidad'></Column>
        <Column header='Acciones' body={actionItem}></Column>
      </DataTable>
    </div>
  );
}

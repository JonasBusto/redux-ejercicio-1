import { useAppSelector } from '../hooks/store';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import { useTransactionAction } from '../hooks/useTransactionAction';
import {
  ActionItem,
  BodyDate,
  BodyMonto,
} from '../components/items/DatatableTransaction';

export function Transactions() {
  const transactions = useAppSelector((state) => state.transactions);
  const { removeTransaction } = useTransactionAction();

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
        <Column
          body={(item) => <BodyMonto item={item} />}
          header='Monto'
        ></Column>
        <Column field='categoria' header='Categoria'></Column>
        <Column
          body={(item) => <BodyDate item={item} />}
          header='Fecha'
          style={{ minWidth: '270px' }}
        ></Column>
        <Column field='modalidad' header='Modalidad'></Column>
        <Column
          header='Acciones'
          body={(item) => (
            <ActionItem item={item} removeTransaction={removeTransaction} />
          )}
        ></Column>
      </DataTable>
    </div>
  );
}

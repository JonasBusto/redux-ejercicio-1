import { TRANSACTIONS_CATEGORY, TRANSACTIONS_MODALITY } from '../constants';
import { useAppSelector } from '../hooks/store';
import { useFilter } from '../hooks/useFilter';
import { TransactionItem } from '../components/items/TransactionItem';

export function Home() {
  const transactions = useAppSelector((state) => state.transactions);
  const {
    transactionFilter,
    filterSearch,
    handleChangeCategory,
    handleChangeModality,
    handleChangeSearch,
  } = useFilter({ transactions });

  return (
    <div className='container mb-5'>
      <div className='d-flex flex-column contain-home'>
        <div className='d-flex justify-content-between align-items-center w-100'>
          <h5 className='m-0'>Filtros: </h5>
          <div className='d-flex'>
            <div className='d-flex flex-column filter-select'>
              <p className='m-0'>Categoria</p>
              <select className='form-select' onChange={handleChangeCategory}>
                <option value=''>Todos</option>
                {TRANSACTIONS_CATEGORY.map((item) => (
                  <option key={item.id} value={item.description}>
                    {item.description}
                  </option>
                ))}
              </select>
            </div>
            <div className='d-flex flex-column filter-select'>
              <p className='m-0'>Modalidad</p>
              <select className='form-select' onChange={handleChangeModality}>
                <option value=''>Todos</option>
                {TRANSACTIONS_MODALITY.map((item) => (
                  <option key={item.id} value={item.description}>
                    {item.description}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='input-search d-flex justify-content-center'>
          <input
            className='form-control'
            value={filterSearch}
            onChange={handleChangeSearch}
            type='text'
            placeholder='Buscar Transacción...'
          />
        </div>
      </div>
      <h1 className='title'>Transacciones</h1>
      <div className='list-items-home mx-auto'>
        {transactionFilter.length > 0 ? (
          transactionFilter.map((transaction, index) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              index={index}
            />
          ))
        ) : (
          <span>Sin transacciones</span>
        )}
      </div>
    </div>
  );
}

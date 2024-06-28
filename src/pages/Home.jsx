import { TRANSACTIONS_CATEGORY, TRANSACTIONS_MODALITY } from '../constants';
import { useAppSelector } from '../hooks/store';
import { useEffect, useState } from 'react';

export function Home() {
  const transactions = useAppSelector((state) => state.transactions);
  const [filterSearch, setFilterSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterModality, setFilterModality] = useState('');
  const [transactionFilter, setTransactionFilter] = useState([...transactions]);

  const filterItems = () => {
    const arrayAux = [...transactions];
    let arrayFilter = arrayAux;

    if (filterSearch === '') {
      arrayFilter = arrayAux;
    } else {
      arrayFilter = arrayAux.filter(
        (item) =>
          item.descripcion.toLowerCase().includes(filterSearch) ||
          item.monto.toLowerCase().includes(filterSearch) ||
          item.categoria.toLowerCase().includes(filterSearch) ||
          item.modalidad.toLowerCase().includes(filterSearch)
      );
    }

    if (filterCategory !== '') {
      arrayFilter = arrayFilter.filter(
        (item) => item.categoria === filterCategory
      );
    }

    if (filterModality !== '') {
      arrayFilter = arrayFilter.filter(
        (item) => item.modalidad === filterModality
      );
    }

    setTransactionFilter(arrayFilter);
  };

  useEffect(() => {
    filterItems();
  }, [filterCategory, filterModality, filterSearch]);

  return (
    <div className='container mb-5'>
      <div className='d-flex flex-column contain-home'>
        <div className='d-flex justify-content-between align-items-center w-100'>
          <h5 className='m-0'>Filtros: </h5>
          <div className='d-flex'>
            <div className='d-flex flex-column filter-select'>
              <p className='m-0'>Categoria</p>
              <select
                className='form-select'
                onChange={(event) => setFilterCategory(event.target.value)}
              >
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
              <select
                className='form-select'
                onChange={(event) => setFilterModality(event.target.value)}
              >
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
            onChange={(event) =>
              setFilterSearch(event.target.value.toLowerCase())
            }
            type='text'
            placeholder='Buscar Transacción...'
          />
        </div>
      </div>
      <h1 className='title'>Transacciones</h1>
      <div className='list-items-home mx-auto'>
        {transactionFilter.length > 0 ? (
          transactionFilter.map((transaction, index) => (
            <span
              key={transaction.id}
              className='d-flex justify-content-center'
            >
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
          ))
        ) : (
          <span>Sin transacciones</span>
        )}
      </div>
    </div>
  );
}

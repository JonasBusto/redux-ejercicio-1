import { useEffect, useState } from 'react';

export function useFilter({ transactions }) {
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

  const handleChangeSearch = (event) => {
    setFilterSearch(event.target.value.toLowerCase());
  };

  const handleChangeCategory = (event) => {
    setFilterCategory(event.target.value);
  };

  const handleChangeModality = (event) => {
    setFilterModality(event.target.value);
  };

  useEffect(() => {
    filterItems();
  }, [filterCategory, filterModality, filterSearch]);

  return {
    transactionFilter,
    filterSearch,
    handleChangeCategory,
    handleChangeModality,
    handleChangeSearch,
  };
}

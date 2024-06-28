import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Transactions } from '../../pages/Transactions';
import { FormTransaction } from '../../pages/FormTransaction';
import { Summary } from '../../pages/Summary';

export function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transacciones' element={<Transactions />} />
        <Route path='/transacciones/cargar' element={<FormTransaction />} />
        <Route path='/transacciones/cargar/:id' element={<FormTransaction />} />
        <Route path='/resumen' element={<Summary />} />
      </Routes>
    </main>
  );
}
/*
vista agregar
vista listado
vista filtrado categorias
vista resumen

*/

import { Link } from 'react-router-dom';

export function NavePage() {
  return (
    <nav className='d-flex justify-content-center'>
      <Link to='/'>Inicio</Link>
      <Link to='/transacciones'>Gestionar</Link>
      <Link to='/resumen'>Resumen</Link>
    </nav>
  );
}

import { format } from '@formkit/tempo';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function ActionItem({ item, removeTransaction }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <span className='btn-actions d-flex'>
      <Link to={'/transacciones/cargar/' + item.id}>
        <i className='fa-solid fa-pencil'></i>
      </Link>
      <button onClick={handleShow}>
        <i className='fa-solid fa-trash-can'></i>
      </button>
      <Modal show={show} onHide={handleClose} className='custom-modal'>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar transacción</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Esta seguro de eliminar la transacción?</Modal.Body>
        <Modal.Footer className='d-flex justify-content-between px-5'>
          <button onClick={handleClose}>Cancelar</button>
          <button onClick={() => removeTransaction(item.id)}>Confirmar</button>
        </Modal.Footer>
      </Modal>
    </span>
  );
}

export function BodyDate({ item }) {
  const [year, month, day] = item.fecha.slice(0, 10).split('-');

  const date = new Date(Number(year), Number(month) - 1, Number(day));
  const formatDate = format(date, 'full');

  return <span>{formatDate}</span>;
}

export function BodyMonto({ item }) {
  return <span>{Number(item.monto).toFixed(2) + ' $'}</span>;
}

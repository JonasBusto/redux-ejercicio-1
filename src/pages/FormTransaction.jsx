import { useNavigate, useParams } from 'react-router-dom/dist';
import { Formik } from 'formik';
import { useAppSelector } from '../hooks/store';
import { useTransactionAction } from '../hooks/useTransactionAction';
import { TRANSACTIONS_CATEGORY, TRANSACTIONS_MODALITY } from '../constants';
import Form from 'react-bootstrap/Form';

export function FormTransaction() {
  const transactions = useAppSelector((state) => state.transactions);
  const { id } = useParams();
  const { updateTransaction, addTransaction } = useTransactionAction();
  const navigate = useNavigate();

  let valuesForm = {
    descripcion: '',
    monto: '',
    categoria: '',
    fecha: '',
    modalidad: '',
  };

  if (id) {
    let transaction = transactions.find((p) => p.id === id);

    valuesForm = {
      id: id,
      descripcion: transaction.descripcion,
      monto: transaction.monto,
      categoria: transaction.categoria,
      fecha: transaction.fecha,
      modalidad: transaction.modalidad,
    };
  }

  return (
    <div className='container'>
      <Formik
        initialValues={valuesForm}
        validate={(values) => {
          let errors = {};

          if (values.descripcion.trim() === '') {
            errors.descripcion = 'Requerido';
          }

          if (values.categoria.trim() === '') {
            errors.categoria = 'Requerido';
          }

          if (values.fecha.trim() === '') {
            errors.fecha = 'Requerido';
          }

          if (values.modalidad.trim() === '') {
            errors.modalidad = 'Requerido';
          }

          if (values.monto.trim() === '') {
            errors.monto = 'Requerido';
          } else if (!/^[+]?([.]\d+|\d+([.]\d+)?)$/.test(values.monto)) {
            errors.monto = 'Monto no valido';
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          if (id) {
            updateTransaction(values);
          } else {
            addTransaction(values);
          }
          navigate('/transacciones');
        }}
      >
        {({
          handleSubmit,
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
        }) => (
          <Form onSubmit={handleSubmit} className='form-upload'>
            <p>{id ? 'Modificar Transacción' : 'Alta Transacción'}</p>

            <Form.Group className='mb-3'>
              <Form.Label className='m-0'>Descripción</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                type='text'
                name='descripcion'
                value={values.descripcion}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={1000}
                placeholder='Ingrese una descripción'
              />

              {touched.descripcion && errors.descripcion && (
                <Form.Text className='text-muted'>
                  {errors.descripcion}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className='m-0'>Monto</Form.Label>
              <Form.Control
                type='text'
                name='monto'
                value={values.monto}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={100}
                placeholder='Ingrese monto'
              />

              {touched.monto && errors.monto && (
                <Form.Text className='text-muted'>{errors.monto}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className='m-0'>Fecha</Form.Label>
              <Form.Control
                type='date'
                name='fecha'
                value={values.fecha}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={100}
                placeholder='Ingrese fecha'
              />

              {touched.fecha && errors.fecha && (
                <Form.Text className='text-muted'>{errors.fecha}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Categoria: </Form.Label>
              <Form.Select
                name='categoria'
                value={values.categoria}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value=''>Sin categoria</option>
                {TRANSACTIONS_CATEGORY.map((item) => (
                  <option key={item.id} value={item.description}>
                    {item.description}
                  </option>
                ))}
              </Form.Select>
              {touched.categoria && errors.categoria && (
                <Form.Text className='text-muted'>{errors.categoria}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Modalidad: </Form.Label>
              <Form.Select
                name='modalidad'
                value={values.modalidad}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value=''>Sin modalidad</option>
                {TRANSACTIONS_MODALITY.map((item) => (
                  <option key={item.id} value={item.description}>
                    {item.description}
                  </option>
                ))}
              </Form.Select>
              {touched.modalidad && errors.modalidad && (
                <Form.Text className='text-muted'>{errors.modalidad}</Form.Text>
              )}
            </Form.Group>

            <div className='d-flex justify-content-center'>
              <button type='submit'>Cargar información</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

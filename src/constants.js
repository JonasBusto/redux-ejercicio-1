export const TRANSACTIONS_CATEGORY = [
  {
    id: 1,
    description: 'Comida',
  },
  {
    id: 2,
    description: 'Sueldo',
  },
  {
    id: 3,
    description: 'Indumentaria',
  },
  {
    id: 4,
    description: 'Varias',
  },
];

export const TRANSACTIONS_MODALITY = [
  {
    id: 1,
    description: 'Ingreso',
  },
  {
    id: 2,
    description: 'Gasto',
  },
];

export const ARRAY_TRANSACTIONS = [
  {
    id: crypto.randomUUID(),
    descripcion: 'Descripcion 1',
    monto: '12343.34',
    categoria: TRANSACTIONS_CATEGORY[0].description,
    fecha: '2024-06-12',
    modalidad: TRANSACTIONS_MODALITY[0].description,
  },
  {
    id: crypto.randomUUID(),
    descripcion: 'Descripcion 2',
    monto: '564545.34',
    categoria: TRANSACTIONS_CATEGORY[1].description,
    fecha: '2024-02-13',
    modalidad: TRANSACTIONS_MODALITY[1].description,
  },
  {
    id: crypto.randomUUID(),
    descripcion: 'Descripcion 3',
    monto: '87878.78',
    categoria: TRANSACTIONS_CATEGORY[1].description,
    fecha: '2024-12-21',
    modalidad: TRANSACTIONS_MODALITY[1].description,
  },
];

export const KEY_LOCALSTORAGE_TRANSACTION = 'Transacciones';

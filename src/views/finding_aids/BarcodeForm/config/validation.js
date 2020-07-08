import * as yup from 'yup';

const validation = yup.object().shape({
  barcode: yup.string()
    .matches(/^HU_OSA_[0-9]{8}$/g, 'Barcode in wrong format')
    .required('This field is required'),
  barcodeConfirm: yup.string()
    .oneOf([yup.ref('barcode'), null], 'Two passwords should match')
    .required('This field is required')
});

export default validation;

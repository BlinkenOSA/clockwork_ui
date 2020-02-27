import * as yup from 'yup';

const validation = yup.object().shape({
  title: yup.string().required('This field is required'),
  fonds: yup.string().required('This field is required'),
});

export default validation;
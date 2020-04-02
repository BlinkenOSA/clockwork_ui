import * as yup from 'yup';

const validation = yup.object().shape({
  country: yup.string().required('This field is required'),
  alpha3: yup.string().required('This field is required')
});

export default validation;
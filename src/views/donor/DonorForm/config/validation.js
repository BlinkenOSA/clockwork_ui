import * as yup from 'yup';

const validation  = yup.object().shape({
  corporation_name: yup.string().when(
    'first_name', {
      is: undefined,
      then: yup.string().required('Either person name or corporation name is required'),
    }
  ),
  postal_code: yup.string().required('This field is required'),
  country: yup.string().required('This field is required'),
  city: yup.string().required('This field is required'),
  address: yup.string().required('This field is required')
});

export default validation;
import * as yup from 'yup';

const validation = yup.object().shape({
  theme: yup.string().required('This field is required')
});

export default validation;
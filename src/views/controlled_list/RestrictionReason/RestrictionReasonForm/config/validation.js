import * as yup from 'yup';

const validation = yup.object().shape({
  reason: yup.string().required('This field is required')
});

export default validation;
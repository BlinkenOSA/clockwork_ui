import * as yup from 'yup';

const validation = yup.object().shape({
  keyword: yup.string().required('This field is required')
});

export default validation;
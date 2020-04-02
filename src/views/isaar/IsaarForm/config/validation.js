import * as yup from 'yup';
import validateApproximateDate from "../../../../utils/validators/validateApproximateDate";

const validation  = yup.object().shape({
  name: yup.string()
    .required('This field is required'),
  type: yup.string()
    .required('This field is required'),
  date_existence_from: yup.string()
    .required('This field is required'),
  date_existence_to: yup.string()
    .required('This field is required'),
  function: yup.string()
    .required('This field is required')
    .nullable()
});

export default validation;

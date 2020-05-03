import * as yup from 'yup';
import validateApproximateDate from "../../../../utils/validators/validateApproximateDate";

const validation  = yup.object().shape({
  year_from: yup.string()
    .required('This field is required'),
  level: yup.string()
    .required('This field is required'),
});

export default validation;

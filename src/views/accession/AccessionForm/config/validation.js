import * as yup from 'yup';

const validation = yup.object().shape({
  title: yup.string()
    .required('This field is required'),
  transfer_date: yup.string()
    .required('This field is required'),
  copyright_status: yup.string()
    .required('This field is required'),
  method: yup.string()
    .required('This field is required'),
  items: yup.array()
    .of(
      yup.object()
        .shape({
          quantity: yup.number()
            .required('This field is required'),
          container: yup.string()
            .required('This field is required')
        })
    )
});

export default validation;

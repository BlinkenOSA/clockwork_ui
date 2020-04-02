import React, {useEffect, useState} from 'react';
import {Field} from "formik";
import CalculatedInputField from "./CalculatedInputField";

const CalculatedInput = ({fieldConfig, disabled, values, ...props}) => {
  const {name} = fieldConfig;
  const [value, setValue] = useState('');

  useEffect(() => {
    const val = fieldConfig.valueGenerator(values);
    setValue(val ? val : '')
    // eslint-disable-next-line
  }, [values, fieldConfig]);

  return (
    <Field name={name} id={name}>
      {
        (props) => {
          return (
            <CalculatedInputField
              value={value}
              fieldConfig={fieldConfig}
              formikProps={props}
            />
          )
        }
      }
    </Field>
  )
};

export default CalculatedInput;

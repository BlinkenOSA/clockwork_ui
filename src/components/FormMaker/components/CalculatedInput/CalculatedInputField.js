import React, {useEffect} from 'react';
import {Input} from "antd";

const CalculatedInputField = ({value, fieldConfig, formikProps}) => {
  const {form} = formikProps;
  const {name, hidden, placeholder} = fieldConfig;

  useEffect(() => {
    form.setFieldValue(name, value);
    // eslint-disable-next-line
  }, [value]);

  return (
    <Input
      name={name}
      value={value}
      disabled={true}
      hidden={hidden}
      placeholder={placeholder}
    />
  )
};

export default CalculatedInputField;

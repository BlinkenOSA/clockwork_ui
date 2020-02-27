import React, {useEffect, useState} from 'react';
import {Field} from "formik";
import getLabel from "../../../../utils/getLabel";
import {Select} from "formik-antd";
import {Spin} from "antd";

const RemoteSelect = ({fieldConfig, disabled, ...props}) => {
  const {name, selectFunction, renderField, valueField, placeholder, search, mode} = fieldConfig;

  const [data, setData] = useState([{value: 'value', text: 'text'}]);
  const [loading, setLoading] = useState(false);

  const { Option } = Select;

  // componentDidMount
  useEffect(() => {
    fetchValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearch = (value) => {
    fetchValues({search: value})
  };

  const fetchValues = (params) => {
    setLoading(true);
    selectFunction(params).then((response) => {
      const apiData = response.data.map(value => ({
        text: value[renderField],
        value: value[valueField],
      }));
      setData(apiData);
    }).then(() => {
      setLoading(false);
    });
  };

  return (
    <Field name={name} id={name}>
      {
        ({ field, form, meta }) => {
          return(
            <Select
              mode={mode ? mode : 'default'}
              name={name}
              placeholder={placeholder ? placeholder : `- Select ${getLabel(name)} -`}
              filterOption={false}
              disabled={disabled}
              allowClear={true}
              notFoundContent={loading ? <Spin size="small" /> : null}
              style={{ width: '100%' }}
              value={field.value}
              showSearch={search}
              onChange={(value) => {
                field.onChange(value);
              }}
              onSearch={onSearch}
            >
              {
                data.map(d => (
                  <Option key={d.value} value={d.value}>{d.text}</Option>
                ))
              }
            </Select>
          )
        }
      }
    </Field>
  )
};

export default RemoteSelect;
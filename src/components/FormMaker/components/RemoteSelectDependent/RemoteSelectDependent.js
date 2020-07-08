import React, {useEffect, useState} from 'react';
import {Field} from "formik";
import getLabel from "../../../../utils/getLabel";
import {Select} from "formik-antd";
import {Spin} from "antd";

const RemoteSelectDependent = ({fieldConfig, setFieldValue, dependentValue, onChange, disabled, ...props}) => {
  const {name, selectFunction, renderFunction, renderField, valueField, placeholder, search, mode} = fieldConfig;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(undefined);

  const { Option } = Select;

  // componentDidMount
  useEffect(() => {
    if (dependentValue) {
      fetchValues(dependentValue);
    } else {
      setData([]);
    }

    setFieldValue(name, undefined);
    setValue(undefined);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependentValue]);

  const onSearch = (value) => {
    fetchValues(dependentValue, {search: value})
  };

  const fetchValues = (dependentValue, params) => {
    setLoading(true);
    selectFunction(dependentValue, params).then((response) => {
      const apiData = response.data.map(value => ({
        text: renderFunction ? renderFunction(value) : value[renderField],
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
              value={value}
              showSearch={search ? search : false}
              onChange={(value) => {
                onChange && onChange(value);
                setValue(value);
                setFieldValue(name, value ? value : "");
                fetchValues(dependentValue);
              }}
              onSearch={search ? onSearch : undefined}
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

export default RemoteSelectDependent;

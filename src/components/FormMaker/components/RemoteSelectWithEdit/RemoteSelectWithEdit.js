import React, {useEffect, useState} from 'react';
import {Button, Drawer, Input, Row, Spin} from "antd";
import {Select} from "formik-antd";
import {Field} from "formik";
import getLabel from "../../../../utils/getLabel";
import { EditOutlined, PlusOutlined } from '@ant-design/icons';

import style from "./RemoteSelectWithEdit.module.css"

const RemoteSelectWithEdit = ({fieldConfig, disabled, ...props}) => {
  const { Option } = Select;

  const {name, selectFunction, renderField, valueField, placeholder, search} = fieldConfig;

  const [data, setData] = useState([{value: 'value', text: 'text'}]);
  const [loading, setLoading] = useState(false);
  const [drawerShown, setDrawerShown] = useState(false);
  const [action, setAction] = useState('create');
  const [selectedRecord, setSelectedRecord] = useState({});

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

  const onClose = (form, value=undefined) => {
    if (form) {
      fetchValues();
      form.setFieldValue(fieldConfig.name, value[valueField]);
    }
    setDrawerShown(false);
  };

  const openForm = (action, value) => {
    setAction(action);
    setSelectedRecord(value);
    setDrawerShown(true);
  };

  return (
    <React.Fragment>
      <Field name={name} id={name}>
        {
          ({field, form, meta}) => {
            return (
              <React.Fragment>
                <Input.Group compact>
                  <Select
                    style={{ width: '60%' }}
                    name={name}
                    placeholder={placeholder ? placeholder : `- Select ${getLabel(name)} -`}
                    filterOption={false}
                    disabled={disabled}
                    allowClear={true}
                    labelInValue={false}
                    notFoundContent={loading ? <Spin size="small" /> : null}
                    value={field.value !== "" ? field.value : undefined}
                    showSearch={search ? search : false}
                    onChange={(value) => {
                      field.onChange(value ? value : "")
                    }}
                    onSearch={onSearch}
                  >
                    {
                      data.map(d => (
                        <Option key={d.value} value={d.value}>{d.text}</Option>
                      ))
                    }
                  </Select>
                  <Button
                    type={'default'}
                    onClick={() => openForm('edit', field.value)}
                    className={style.Button}
                    disabled={!field.value || disabled}
                  >
                    <EditOutlined/>
                  </Button>
                  <Button
                    type={'default'}
                    onClick={() => openForm('create', 0)}
                    className={style.Button}
                    disabled={disabled}
                  >
                    <PlusOutlined/>
                  </Button>
                </Input.Group>
                <Row>
                  <Drawer
                    title={action.charAt(0).toUpperCase() + action.slice(1)}
                    width={'50%'}
                    onClose={(e) => onClose()}
                    visible={drawerShown}
                  >
                    { props.render({
                      action: action,
                      recordIdentifier: selectedRecord,
                      onClose: (value) => onClose(form, value),
                      type: 'select'
                    })}
                  </Drawer>
                </Row>
              </React.Fragment>
            )
          }
        }
      </Field>
    </React.Fragment>
  );
};

export default RemoteSelectWithEdit;

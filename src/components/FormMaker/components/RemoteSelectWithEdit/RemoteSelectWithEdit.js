import React, {useEffect, useState} from 'react';
import {Button, Col, Drawer, Icon, Row, Spin} from "antd";
import style from "./RemoteSelectWithEdit.module.css"
import {Select} from "formik-antd";
import {Field} from "formik";
import getLabel from "../../../../utils/getLabel";

const RemoteSelectWithEdit = ({fieldConfig, disabled, ...props}) => {
  const ButtonGroup = Button.Group;
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
                <Row gutter={10}>
                  <Col md={20} xs={24}>
                    <Select
                      name={name}
                      placeholder={placeholder ? placeholder : `- Select ${getLabel(name)} -`}
                      filterOption={false}
                      disabled={disabled}
                      allowClear={true}
                      labelInValue={false}
                      notFoundContent={loading ? <Spin size="small" /> : null}
                      style={{ width: '100%' }}
                      value={field.value !== 0 ? field.value : undefined}
                      showSearch={search}
                      onChange={field.onChange}
                      onSearch={onSearch}
                    >
                      {
                        data.map(d => (
                          <Option key={d.value} value={d.value}>{d.text}</Option>
                        ))
                      }
                    </Select>
                  </Col>
                  <Col md={4} xs={24}>
                    <ButtonGroup>
                      <Button
                        type={'default'}
                        onClick={() => openForm('edit', field.value)}
                        className={style.Button}
                        disabled={!field.value || disabled}
                      >
                        <Icon type={'edit'}/>
                      </Button>
                      <Button
                        type={'default'}
                        onClick={() => openForm('create', 0)}
                        className={style.Button}
                        disabled={disabled}
                      >
                        <Icon type={'plus'}/>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
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
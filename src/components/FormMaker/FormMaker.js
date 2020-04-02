import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {Button, Card, Col, Row, Tabs, notification, Alert, Spin} from "antd";
import {Form, FormItem, Input, Select} from "formik-antd";
import {ErrorMessage, FieldArray, Formik} from "formik";
import style from "./FormMaker.module.css";
import getLabel from "../../utils/getLabel";
import FormFooter from "./FormFooter";
import RemoteSelect from "./components/RemoteSelect/RemoteSelect";
import RemoteSelectWithEdit from "./components/RemoteSelectWithEdit/RemoteSelectWithEdit";
import AuthoritySelect from "./components/AuthoritySelect/AuthoritySelect";
import { CloseOutlined, ExclamationCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import FormattedTextArea from "./components/FormattedTextArea/FormattedTextArea";
import CalculatedInput from "./components/CalculatedInput/CalculatedInput";
import api from "../../services/api";


const FormMaker = ({fieldConfig, serviceClass, backPath, action, recordIdentifier, formData, initialValues, recordName, type='simple', validation, info, ...props}) => {
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState({});
  const [errors, setErrors] = useState([]);


  const readOnly = action === 'view';
  const { TabPane } = Tabs;

  // componentDidMount
  useEffect(() => {
    const source = api.CancelToken.source();
    const recordID = recordIdentifier ? recordIdentifier : props.match.params.id;

    switch (action) {
      case 'view':
        setLoading(true);
        serviceClass.read(recordID, source).then((response) => {
          const initData = processInitialData(response.data);
          setInitialData(initData);
          setLoading(false)
        }).catch((error) => {
          setLoading(true);
        });
        break;
      case 'edit':
        setLoading(true);
        serviceClass.read(recordID, source).then((response) => {
          const initData = processInitialData(response.data);
          setInitialData(initData);
          setLoading(false)
        }).catch((error) => {
          setLoading(true);
        });
        break;
      case 'create':
        if (formData) {
          setInitialData(processInitialData(generateInitialData(formData)));
        } else {
          if (serviceClass.hasOwnProperty('preCreate')) {
            setLoading(true);
            serviceClass.preCreate(source).then((response) => {
              const initData = response.data;
              setInitialData(processInitialData(generateInitialData(initData)));
              setLoading(false);
            }).catch((error) => {
              setLoading(true);
            });;
          }
        }
        break;
      default:
        break;
    }

    return () => {
      source.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordIdentifier, formData]);

  const generateInitialData = (initialData) => {
    const parentElements = ['tabs', 'tab', 'column'];
    let init = initialData;

    const collectInitialFields = (fc) => {
      fc.forEach((f) => {
        if (parentElements.includes(f.type)) {
          collectInitialFields(f.elements)
        } else {
          if (f.type === 'select' || f.type === 'remoteSelect' || f.type === 'remoteSelectWithEdit') {
            if (!init.hasOwnProperty(f.name)) {
              init[f.name] = undefined;
            }
          } else if (f.type === 'many') {
            if (!init.hasOwnProperty(f.name)) {
              init[f.name] = [];
            }
          } else {
            if (!init.hasOwnProperty(f.name)) {
              init[f.name] = ""
            }
          }
        }
      })
    };

    collectInitialFields(fieldConfig);
    return init;
  };

  const processInitialData = (initialData) => {
    const parseData = (fieldData, field) => {
      if (field.type === 'remoteSelect' || field.type === 'remoteSelectWithEdit') {
        if (fieldData) {
          if (field.mode === 'multiple') {
            return fieldData.map((data) => data[field.valueField]);
          } else {
            return fieldData[field.valueField];
          }
        }
      }
      return fieldData ? fieldData : undefined;
    };

    fieldConfig.forEach((field) => {
      if (field.type === 'column') {
        field.elements.forEach((columnField) => {
          const fieldData = initialData[columnField.name];
          initialData[columnField.name] = parseData(fieldData, columnField)
        })
      } else {
        const fieldData = initialData[field.name];
        initialData[field.name] = parseData(fieldData, field);
      }
    });

    return initialData
  };

  const renderField = (fieldConfig, key, values) => {
    const renderFormLabel = () => {
      if (fieldConfig.label) {
        if (fieldConfig.label === 'disabled') {
          return undefined;
        }
        return fieldConfig.label
      } else {
        return getLabel(fieldConfig.name);
      }
    };

    const renderFormField = () => {
      switch (fieldConfig.type) {
        case 'input':
          return(
            <Input
              name={fieldConfig.name}
              hidden={fieldConfig.hidden}
              disabled={fieldConfig.disabled ? fieldConfig.disabled : readOnly}
              placeholder={fieldConfig.placeholder}
            />
          );
        case 'calculatedInput':
          return(
            <CalculatedInput
              values={values}
              fieldConfig={fieldConfig}
            />
          );
        case 'textarea':
          return(
            <Input.TextArea
              name={fieldConfig.name}
              hidden={fieldConfig.hidden}
              disabled={fieldConfig.disabled ? fieldConfig.disabled : readOnly}
              placeholder={fieldConfig.placeholder}
              rows={fieldConfig.rows ? fieldConfig.rows : 3}
            />
          );
        case 'formattedText':
          return (
            <FormattedTextArea
              fieldConfig={fieldConfig}
              disabled={fieldConfig.disabled ? fieldConfig.disabled : readOnly}
            />
          );
        case 'select':
          const { Option } = Select;

          return (
            <Select
              name={fieldConfig.name}
              disabled={fieldConfig.disabled ? fieldConfig.disabled : readOnly}
              placeholder={fieldConfig.placeholder}
              allowClear={true}
              style={{ width: '100%' }}
            >
              {
                fieldConfig.data.map((d, idx) => (<Option key={idx} value={d[fieldConfig.valueField]}>{d[fieldConfig.renderField]}</Option>))
              }
            </Select>
          );
        case 'remoteSelect':
          return(
            <RemoteSelect
              fieldConfig={fieldConfig}
              disabled={fieldConfig.disabled ? fieldConfig.disabled : readOnly}
            />
          );
        case 'remoteSelectWithEdit':
          return(
            <RemoteSelectWithEdit
              fieldConfig={fieldConfig}
              disabled={fieldConfig.disabled ? fieldConfig.disabled : readOnly}
              render={(props) => (fieldConfig.formFields(props))}
            />
          );
        case 'authority':
          return(
            <AuthoritySelect
              values={values}
              fieldConfig={fieldConfig}
              readOnly={readOnly}
            />
          );
        default:
          break;
      }
    };

    return (
      <Col md={fieldConfig.span ? fieldConfig.span : 24} xs={24} key={key}>
        <FormItem
          name={fieldConfig.name}
          label={renderFormLabel()}
          className={style.FormItem}
          required={fieldConfig.required}
          help={fieldConfig.help}
        >
          {renderFormField()}
          <span className={style.ErrorMessage}>
            <ErrorMessage name={fieldConfig.name} />
          </span>
        </FormItem>
      </Col>
    );
  };

  const renderColumn = (field, key, values) => {
    return(
      <Col span={field.span ? field.span : 24} key={key}>
        <Row gutter={10} type="flex">
          {
            field.elements.map((f, key) => {
              return(renderField(f, key, values))
            })
          }
        </Row>
      </Col>
    )
  };

  const renderMany = (manyField, key, values) => {
    let manyFieldValues = values ? values : [];
    manyFieldValues = manyFieldValues.length === 0 ? [''] : manyFieldValues;

    const getInitialData = () => {
      let init = {};
      manyField.elements.forEach((f) => {
        if (f.type === 'select' || f.type === 'remoteSelect' || f.type === 'remoteSelectWithEdit') {
          init[f.name] = undefined;
        } else {
          init[f.name] = ""
        }
      });
      return init;
    };

    const init = getInitialData();

    return(
      <React.Fragment key={key}>
        <Col span={24}>
          <label className={style.Label}>
            {getLabel(manyField.label)}
          </label>
        </Col>
        <FieldArray
          name={manyField.name}
          render={arrayHelpers => (
            <Col span={24}>
              {
                manyFieldValues.map((value, index) => (
                  <Row gutter={10} type={'flex'} key={index}>
                    {
                      manyField.elements.map((field, fieldKey) => {
                        let f = {...field};
                        f.name = `${manyField.name}.${index}.${field.name}`;
                        return(renderField(f, fieldKey))
                      })
                    }
                    <Col span={2}>
                      <Button
                        type={'default'}
                        onClick={() => arrayHelpers.remove(index)}
                        style={{ background: "#f4f4f4", borderColor: "#ddd" }}
                      >
                        <CloseOutlined/>
                      </Button>
                    </Col>
                  </Row>
                ))
              }
              <Col span={24} className={style.ManyAddButton}>
                <Row gutter={10} type={'flex'}>
                  <Button
                    type={'default'}
                    onClick={() => {
                      if (JSON.stringify(manyFieldValues[manyFieldValues.length-1]) !== JSON.stringify(init)) {
                        arrayHelpers.push(init)
                      }
                    }}
                    style={{ background: "#f4f4f4", borderColor: "#ddd" }}
                  >
                    Add
                  </Button>
                </Row>
              </Col>
            </Col>
          )}
        />
      </React.Fragment>
    )
  };

  const collectTabFields = () => {
    const tabFields = {};

    fieldConfig.forEach((f) => {
      if (f.type === 'tabs') {
        f.elements.forEach((tab, index) => {
          let t = [];
          tab.elements.forEach((field) => {
            if (field.type !== 'column') {
              t.push(field.name);
            } else {
              field.elements.forEach((fieldInColumns) => {
                t.push(fieldInColumns.name)
              })
            }
          });
          tabFields[index] = t;
        })
      }
    });

    return tabFields;
  };

  const renderTab = (fieldConfig, key, values, errors) => {
    const tabTitle = (field, idx) => {
      let hasError = false;
      if (Object.keys(errors).length !== 0) {
        const tabFields = collectTabFields();
        tabFields[idx].forEach((field) => {
          if (Object.keys(errors).includes(field)) {
            hasError = true;
          }
        })
      }
      return hasError ? <span className={style.ErrorTab}>{field.title} <ExclamationCircleOutlined/></span> : field.title;
    };

    return(
      <Col span={24} key={key}>
        <Tabs defaultActiveKey="0" style={type === 'simple' ? {marginTop: '-10px'} : undefined}>
          {
            fieldConfig.elements.map((field, idx) => {
              return (
                <TabPane key={idx} tab={tabTitle(field, idx)}>
                  <Row gutter={10} style={{margin: 0}}>
                  {
                    field.elements.map((f, k) => {
                      return chooseRender(f, k, values)
                    })
                  }
                  </Row>
                </TabPane>
              )
            })
          }
        </Tabs>
      </Col>
    );
  };

  const renderErrors = () => {
    const onErrorClose = () => {
      setErrors([]);
    };

    if (errors.length > 0) {
      const errorDisplay = errors.map((e, idx) => {
        return (
          <div key={idx}>{e}</div>
        )
      });

      return (
        <Alert
          description={errorDisplay}
          type="error"
          closable
          className={style.ErrorAlert}
          onClose={onErrorClose}
          message={''}
        />
      )
    }
  };

  const successAlert = () => {
    notification.success({
      duration: 3,
      message: 'Success!',
      description: `${recordName} record was ${action === 'create' ? 'created' : 'updated'}!`,
    });
  };

  const afterSubmit = (data) => {
    const { history } = props;
    successAlert();

    if (type === 'simple') {
      setSaving(false);
      history.push(backPath);
    }

    if (type === 'select') {
      setSaving(false);
      props.onClose(data)
    }
  };

  const handleSubmit = (formValues, formik) => {
    const handleError = (error) => {
      const errors = error.response.data;
      const {non_field_errors, ...field_errors} = errors;
      if (non_field_errors) {
        setErrors(non_field_errors);
      }
      if (field_errors) {
        formik.setErrors(field_errors)
      }
      setSaving(false);
    };

    const recordID = recordIdentifier ? recordIdentifier : props.match.params.id;
    setSaving(true);

    switch (action) {
      case 'create':
        serviceClass.create(formValues).then((response) => {
          formik.resetForm();
          afterSubmit(response.data)
        }).catch(error => {
          handleError(error);
        });
        break;
      case 'edit':
        serviceClass.update(recordID, formValues).then((response) => {
          formik.resetForm();
          afterSubmit(response.data)
        }).catch(error => {
          handleError(error)
        });
        break;
      default:
        break;
    }
  };

  const chooseRender = (field, key, values, errors) => {
    switch (field.type) {
      case 'column':
        return renderColumn(field, key, values);
      case 'many':
        return renderMany(field, key, values[field.name]);
      case 'tabs':
        return renderTab(field, key, values, errors);
      default:
        return renderField(field, key, values);
    }
  };

  const renderForm = (props) => {
    return (
      <Form layout={'vertical'}>
        {renderErrors()}
        <Card size={'small'}>
          <Row gutter={10} type="flex">
            {
              fieldConfig.map((field, key) => {
                return chooseRender(field, key, props.values, props.errors)
              })
            }
          </Row>
        </Card>
        <FormFooter
          action={action}
          loading={saving}
          backPath={backPath}
          values={props.values}
          info={info}
        />
      </Form>
    )
  };

  const renderDrawerForm = (props) => {
    return (
      <Form layout={'vertical'}>
        {renderErrors()}
        <Row gutter={10} type="flex">
          {
            fieldConfig.map((field, key) => {
              return chooseRender(field, key, props.values)
            })
          }
        </Row>
        <FormFooter
          action={action}
          loading={saving}
          type={type}
          backPath={backPath}
          values={props.values}
          info={info}
          onSubmitClick={props.submitForm}
        />
      </Form>
    )
  };

  return(
    <Spin spinning={loading} indicator={<LoadingOutlined/>}>
      <Formik
        enableReinitialize={true}
        initialValues={initialData}
        onSubmit={handleSubmit}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={validation}
      >
        {
          (props) => {
            if (type==='simple') {
              return (renderForm(props))
            } else {
              return (renderDrawerForm(props))
            }
          }
        }
      </Formik>
    </Spin>
  )
};

FormMaker.defaultValues = {
  action: 'create',
  type: 'simple',
  info: true
};

FormMaker.propTypes = {
  serviceClass: PropTypes.object.isRequired,
  fieldConfig: PropTypes.array.isRequired,
  backPath: PropTypes.string,
  action: PropTypes.string,
  type: PropTypes.string
};

export default withRouter(FormMaker);

import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {Button, Card, Col, Icon, Row, Tabs, notification} from "antd";
import {Form, FormItem, Input} from "formik-antd";
import {ErrorMessage, FieldArray, Formik} from "formik";
import style from "./FormMaker.module.css";
import getLabel from "../../utils/getLabel";
import FormFooter from "./FormFooter";
import RemoteSelect from "./components/RemoteSelect";
import RemoteSelectWithEdit from "./components/RemoteSelectWithEdit";
import axios from 'axios';

const FormMaker = ({fieldConfig, serviceClass, backPath, action, recordIdentifier, recordName, type='simple', validation, info, ...props}) => {
  const [initialData, setInitialData] = useState({});
  const readOnly = action === 'view';
  const { TabPane } = Tabs;

  // componentDidMount
  useEffect(() => {
    const source = axios.CancelToken.source();
    const recordID = recordIdentifier ? recordIdentifier : props.match.params.id;

    switch (action) {
      case 'view':
        serviceClass.read(recordID, source).then((response) => {
          const initData = processInitialData(response.data);
          setInitialData(initData);
        });
        break;
      case 'edit':
        serviceClass.read(recordID, source).then((response) => {
          const initData = processInitialData(response.data);
          setInitialData(initData);
        });
        break;
      case 'create':
        setInitialData({});
        break;
      default:
        break;
    }

    return () => {
      source.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordIdentifier]);

  const processInitialData = (initialData) => {
    const parseData = (fieldData, field) => {
      if (field.type === 'remoteSelect' || field.type === 'remoteSelectWithEdit') {
        if (fieldData) {
          return fieldData[field.valueField];
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

  const renderField = (fieldConfig, key) => {
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
              disabled={fieldConfig.disabled ? fieldConfig.disabled : readOnly}
              placeholder={fieldConfig.placeholder}
            />
          );
        case 'textarea':
          return(
            <Input.TextArea
              name={fieldConfig.name}
              disabled={fieldConfig.disabled ? fieldConfig.disabled : readOnly}
              placeholder={fieldConfig.placeholder}
              rows={fieldConfig.rows ? fieldConfig.rows : 3}
            />
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

  const renderColumn = (field, key) => {
    return(
      <Col span={field.span ? field.span : 24} key={key}>
        <Row gutter={10} type="flex">
          {
            field.elements.map((f, key) => {
              return(renderField(f, key))
            })
          }
        </Row>
      </Col>
    )
  };

  const renderMany = (manyField, key, values) => {
    let manyFieldValues = values ? values : [];
    manyFieldValues = manyFieldValues.length === 0 ? [''] : manyFieldValues;

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
                        <Icon type="close" />
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
                      if (manyFieldValues[manyFieldValues.length-1] !== '') {
                        arrayHelpers.insert(manyFieldValues.length, '')
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

  const renderTab = (fieldConfig, key, values) => {
    return(
      <Col span={24} key={key}>
        <Tabs type="card" className={style.Tab}>
          {
            fieldConfig.elements.map((field, idx) => {
              return (
                <TabPane key={idx} tab={field.title}>
                  {
                    field.elements.map((f, k) => {
                      return chooseRender(f, k, values)
                    })
                  }
                </TabPane>
              )
            })
          }
        </Tabs>
      </Col>
    );
  };

  const successAlert = () => {
    notification.success({
      duration: 3,
      message: 'Success!',
      description: `${recordName} record was ${action === 'create' ? 'created' : 'updated'}!`,
    });
  };

  const errorAlert = () => {
    notification.error({
      duration: 3,
      message: 'Error!',
      description: `There is a problem on your form!`,
    });
  };

  const afterSubmit = (data) => {
    const { history } = props;
    successAlert();

    if (type === 'simple') {
      history.push(backPath);
    }

    if (type === 'select') {
      props.onClose(data)
    }
  };

  const handleSubmit = (formValues) => {
    const recordID = recordIdentifier ? recordIdentifier : props.match.params.id;

    switch (action) {
      case 'create':
        serviceClass.create(formValues).then((response) => {
          afterSubmit(response.data)
        }).catch(error => { errorAlert() });
        break;
      case 'edit':
        serviceClass.update(recordID, formValues).then((response) => {
          afterSubmit(response.data)
        }).catch(error => { errorAlert() });
        break;
      default:
        break;
    }
  };

  const chooseRender = (field, key, values) => {
    switch (field.type) {
      case 'column':
        return renderColumn(field, key);
      case 'many':
        return renderMany(field, key, values[field.name]);
      case 'tabs':
        return renderTab(field, key, values);
      default:
        return renderField(field, key);
    }
  };

  const renderForm = (props) => {
    return (
      <Form layout={'vertical'}>
        <Card size={'small'}>
          <Row gutter={10} type="flex">
            {
              fieldConfig.map((field, key) => {
                return chooseRender(field, key, props.values)
              })
            }
          </Row>
        </Card>
        <FormFooter
          action={action}
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
        <Row gutter={10} type="flex">
          {
            fieldConfig.map((field, key) => {
              return chooseRender(field, key, props.values)
            })
          }
        </Row>
        <FormFooter
          action={action}
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
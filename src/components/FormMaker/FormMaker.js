import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {Button, Card, Col, Icon, Row} from "antd";
import {Form, Input} from "formik-antd";
import {FieldArray, Formik} from "formik";
import style from "./FormMaker.module.css";
import getLabel from "../../utils/getLabel";
import FormButtons from "./FormFooter";
import RemoteSelect from "./components/RemoteSelect";

const FormMaker = ({fieldConfig, serviceClass, action, ...props}) => {
  const [initialData, setInitialData] = useState({});
  const readOnly = action === 'view';

  const ButtonGroup = Button.Group;

  // componentDidMount
  useEffect(() => {
    const recordID = props.match.params.id;

    switch (action) {
      case 'view':
        serviceClass.read(recordID).then((response) => {
          const initData = processInitialData(response.data);
          setInitialData(initData);
        });
        break;
      case 'edit':
        serviceClass.read(recordID).then((response) => {
          const initData = processInitialData(response.data);
          setInitialData(initData);
        });
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const processInitialData = (initialData) => {
    const parseData = (fieldData, field) => {
      if (field.type === 'remoteSelect') {
        if (fieldData) {
          return {
            key: fieldData[field.valueField],
            label: fieldData[field.renderField]
          };
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
              placeholder={fieldConfig.placeholder} />
          );
        case 'textarea':
          return(
            <Input.TextArea
              name={fieldConfig.name}
              disabled={fieldConfig.disabled ? fieldConfig.disabled : readOnly}
              placeholder={fieldConfig.placeholder}
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
            <React.Fragment>
              <Col span={20}>
                <RemoteSelect
                  fieldConfig={fieldConfig}
                  disabled={fieldConfig.disabled ? fieldConfig.disabled : readOnly}
                />
              </Col>
              <Col span={4}>
                <ButtonGroup>
                  <Button type={'default'} style={{ background: "#f4f4f4", borderColor: "#ddd" }}><Icon type={'edit'}/></Button>
                  <Button type={'default'} style={{ background: "#f4f4f4", borderColor: "#ddd" }}><Icon type={'plus'}/></Button>
                </ButtonGroup>
              </Col>
            </React.Fragment>
          );
        default:
          break;
      }
    };

    return (
      <Col span={fieldConfig.span ? fieldConfig.span : 24} key={key}>
        <Form.Item
          name={fieldConfig.name}
          label={renderFormLabel()}
          className={style.FormItem}
          required={fieldConfig.required}
          help={fieldConfig.help}
        >
          {renderFormField()}
        </Form.Item>
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
    const manyFieldValues = values ? values : [];

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

  const handleSubmit = (formValues) => {
    console.log(formValues)
  };

  return(
    <Formik
      enableReinitialize={true}
      initialValues={initialData}
      onSubmit={handleSubmit}
    >
      {(props)=> (
        <Form layout={'vertical'}>
          <Card size={'small'}>
            <Row gutter={10} type="flex">
              {
                fieldConfig.map((field, key) => {
                  switch (field.type) {
                    case 'column':
                      return renderColumn(field, key);
                    case 'many':
                      return renderMany(field, key, props.values[field.name]);
                    default:
                      return renderField(field, key);
                  }
                })
              }
            </Row>
          </Card>
          <FormButtons />
        </Form>
      )}
    </Formik>
  )
};

FormMaker.defaultValues = {
  action: 'create',
};

FormMaker.propTypes = {
  serviceClass: PropTypes.object.isRequired,
  fieldConfig: PropTypes.array.isRequired,
  action: PropTypes.string,
};

export default withRouter(FormMaker);
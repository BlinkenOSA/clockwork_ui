import React, {useState} from 'react';
import {Button, Col, Row} from "antd";
import {Formik} from "formik";
import container from "../../../services/container/Container";
import {Form, FormItem, Input} from "formik-antd";
import style from "../ContainerForm/ContainerCreateForm.module.css";
import validation from "./config/validation"

const BarcodeCreateForm = ({recordIdentifier, afterSubmit, ...props}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values, formik) => {
    setLoading(true);
    container.fieldUpdate(recordIdentifier, values).then((response) => {
      setLoading(false);
      afterSubmit()
    }).catch((error) => {
      setLoading(false);
      formik.setErrors(error.response.data);
    });
  };

  return (
    <Formik
      enableReinitialize={true}
      onSubmit={handleSubmit}
      initialValues={{barcode: '', barcodeConfirm: ''}}
      validateOnBlur={true}
      validateOnChange={true}
      validationSchema={validation}
    >
      {
        ({values, ...props}) => (
          <Form layout={'vertical'}>
            <Row gutter={10} type="flex">
              <Col md={24}>
                <FormItem
                  name={'barcode'}
                  label={'Barcode'}
                  required={true}
                  className={style.FormItem}
                >
                  <Input name={'barcode'} disabled={false} />
                </FormItem>
              </Col>
              <Col md={24}>
                <FormItem
                  name={'barcodeConfirm'}
                  label={'Confirm Barcode'}
                  required={true}
                  className={style.FormItem}
                >
                  <Input name={'barcodeConfirm'} disabled={!values['barcode']} />
                </FormItem>
              </Col>
              <Col span={24} style={{paddingTop: '10px'}}>
                <Button
                  type={'primary'}
                  loading={loading}
                  onClick={props.submitForm}
                  disabled={!props.dirty || !props.isValid}
                >
                  Create
                </Button>
              </Col>
            </Row>
          </Form>
        )
      }
    </Formik>
  )
};

export default BarcodeCreateForm;

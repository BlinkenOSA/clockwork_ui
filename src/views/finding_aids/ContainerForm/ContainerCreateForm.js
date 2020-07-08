import React, {useState, useEffect} from 'react';
import validation from "./config/validation";
import {Button, Card, Col, Row, Spin} from "antd";
import {Formik} from "formik";
import { LoadingOutlined } from '@ant-design/icons';
import container from "../../../services/container/Container";
import {Form, FormItem, Input} from "formik-antd";
import style from "./ContainerCreateForm.module.css";
import carrier_type from "../../../services/controlled_list/CarrierType";
import RemoteSelect from "../../../components/FormMaker/components/RemoteSelect/RemoteSelect";

const ContainerCreateForm = ({archivalUnitID, afterSubmit, archivalUnitTitle, formOpen, ...props}) => {
  const [formLoading, setFormLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    if(formOpen) {
      setFormLoading(true);
      container.preCreate(archivalUnitID).then((response) => {
        const initData = response.data;
        setInitialData(initData);
        setFormLoading(false);
      }).catch((error) => {
        setFormLoading(true);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formOpen]);

  const handleSubmit = (values, formik) => {
    setLoading(true);
    container.create(values).then((response) => {
      formik.setFieldValue('container_no', response.data.container_no + 1);
      setLoading(false);
      afterSubmit()
    });
  };

  return (
    <Spin spinning={formLoading} indicator={<LoadingOutlined/>}>
      <Formik
        enableReinitialize={true}
        onSubmit={handleSubmit}
        initialValues={initialData}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={validation}
      >
        {
          (props) => (
            <Form layout={'vertical'}>
              <Card size={'small'} title={`Create container`}>
                <Row gutter={10} type="flex">
                  <Col md={4}>
                    <FormItem
                      name={'container_no'}
                      label={'Container No.'}
                      className={style.FormItem}
                    >
                      <Input name={'container_no'} disabled={true} />
                    </FormItem>
                  </Col>
                  <Col md={8}>
                    <FormItem
                      name={'carrer_type'}
                      label={'Carrier Type'}
                      className={style.FormItem}
                    >
                      <RemoteSelect
                        fieldConfig={{
                          name: 'carrier_type',
                          type: 'remoteSelect',
                          selectFunction: carrier_type.select,
                          valueField: 'id',
                          renderField: 'type',
                          placeholder: '- Select Carrier Type -',
                          required: true
                        }}
                      />
                    </FormItem>
                  </Col>
                  <Col md={6}>
                    <FormItem
                      name={'legacy_id'}
                      label={'Legacy ID'}
                      className={style.FormItem}
                    >
                      <Input name={'legacy_id'} />
                    </FormItem>
                  </Col>
                  <Col md={6}>
                    <FormItem
                      name={'container_label'}
                      label={'Container Label'}
                      className={style.FormItem}
                    >
                      <Input name={'container_label'} />
                    </FormItem>
                  </Col>
                </Row>
              </Card>
              <Card size={'small'} className={style.Footer}>
                <Row gutter={10} type="flex">
                  <Col span={4}>
                    <Button
                      type={'primary'}
                      htmlType={'submit'}
                      loading={loading}
                      disabled={!props.values['carrier_type']}
                    >
                      Create
                    </Button>
                  </Col>
                </Row>
              </Card>
              <div className={style.FooterMargin}/>
            </Form>
          )
        }
      </Formik>
    </Spin>
  )
};

export default ContainerCreateForm;

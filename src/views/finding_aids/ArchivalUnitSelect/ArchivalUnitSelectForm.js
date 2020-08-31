import React from 'react';
import {Formik} from "formik";
import {Form, FormItem} from "formik-antd";
import {Badge, Button, Card, Col, Row} from "antd";
import archival_unit from "../../../services/archival_unit/ArchivalUnit";
import RemoteSelectDependent
  from "../../../components/FormMaker/components/RemoteSelectDependent/RemoteSelectDependent";
import RemoteSelect from "../../../components/FormMaker/components/RemoteSelect/RemoteSelect";
import style from "./ArchivalUnitSelectForm.module.css";
import { ContainerOutlined, CopyOutlined, TableOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import {CONTAINER_LIST} from "../../../config/config-urls";

const renderArchivalUnit = (data) => {
  return `${data.reference_code} ${data.title}`
};

const renderSeries = (data) => {
  let containerText;
  let folderText;
  let renderBadge = true;

  switch (data.container_count) {
    case 0:
      containerText = '';
      renderBadge = false;
      break;
    case 1:
      containerText = `1 container`;
      renderBadge = true;
      break;
    default:
      containerText = `${data.container_count} containers`;
      renderBadge = true;
      break;
  }

  switch (data.folder_count) {
    case 0:
      folderText = '';
      renderBadge = false;
      break;
    case 1:
      folderText = '1 folder/item in';
      renderBadge = true;
      break;
    default:
      folderText = `${data.folder_count} folders/items in`;
      renderBadge = true;
      break;
  }

  const text = `${folderText} ${containerText}`;

  return (
    <span>
      {data.reference_code} {data.title}
      {renderBadge &&
        <Badge
          count={text}
          style={{ marginLeft: '10px', backgroundColor: '#fa8c16', borderRadius: '3px', fontSize: '0.8em' }}
        />
      }
    </span>
  )
};

const ArchivalUnitSelectForm = (props) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{}}
      onSubmit={undefined}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {
        ({values, setFieldValue}) => (
          <React.Fragment>
            <Form layout={'vertical'}>
              <Card size={'small'}>
                <Row gutter={10} type="flex">
                  <Col md={24} xs={24}>
                    <FormItem
                      name={"fonds"}
                      label={'Fonds'}
                      className={style.FormItem}
                      required={true}
                    >
                      <RemoteSelect
                        fieldConfig={{
                          name: 'fonds',
                          type: 'remoteSelect',
                          placeholder: '- Select Fonds -',
                          selectFunction: archival_unit.selectFonds,
                          required: true,
                          valueField: 'id',
                          renderFunction: renderArchivalUnit,
                          search: true,
                        }}
                      />
                    </FormItem>
                  </Col>
                  <Col md={24} xs={24}>
                    <FormItem
                      name={"subfonds"}
                      label={'SubFonds'}
                      className={style.FormItem}
                      required={true}
                    >
                      <RemoteSelectDependent
                        fieldConfig={{
                          name: 'subfonds',
                          type: 'remoteSelect',
                          placeholder: '- Select SubFonds -',
                          selectFunction: archival_unit.selectSubFonds,
                          required: true,
                          valueField: 'id',
                          renderFunction: renderArchivalUnit,
                          search: true,
                        }}
                        setFieldValue={setFieldValue}
                        dependentValue={values['fonds']}
                      />
                    </FormItem>
                  </Col>
                  <Col md={24} xs={24}>
                    <FormItem
                      name={"series"}
                      label={'Series'}
                      className={style.FormItem}
                      required={true}
                    >
                      <RemoteSelectDependent
                        fieldConfig={{
                          name: 'series',
                          type: 'remoteSelect',
                          placeholder: '- Select Series -',
                          selectFunction: archival_unit.selectSeries,
                          required: true,
                          valueField: 'id',
                          renderFunction: renderSeries,
                          search: true,
                        }}
                        setFieldValue={setFieldValue}
                        dependentValue={values['subfonds']}
                      />
                    </FormItem>
                  </Col>
                </Row>
              </Card>
            </Form>
            <Card size={'small'} className={style.Footer}>
              <Row gutter={10} type="flex">
                <Col span={24}>
                  <Link to={CONTAINER_LIST.replace(':archival_unit', values['series'])}>
                    <Button
                      type={'secondary'}
                      disabled={!values['series']}
                    >
                      <ContainerOutlined/> Containers
                    </Button>
                  </Link>
                  <Button
                    type={'secondary'}
                    className={style.Button}
                    disabled={true}
                  >
                    <CopyOutlined/> Templates
                  </Button>
                  <Button
                    type={'secondary'}
                    className={style.Button}
                    disabled={true}
                  >
                    <TableOutlined/> Table View
                  </Button>
                </Col>
              </Row>
            </Card>
          </React.Fragment>
        )
      }
    </Formik>
  )
};

export default ArchivalUnitSelectForm;

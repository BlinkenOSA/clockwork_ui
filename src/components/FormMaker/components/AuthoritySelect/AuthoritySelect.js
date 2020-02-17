import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from "antd";
import {Input} from "formik-antd";
import style from './AuthoritySelect.module.css';
import AuthoritySelectTable from "./AuthoritySelectTable";
import {Field} from "formik";

const AuthoritySelect = ({fieldConfig, readOnly, values, ...props}) => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  // componentDidMount
  useEffect(() => {
    setDataSource([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values[fieldConfig.searchValue]]);

  const onSearch = (value, type) => {
    if (value) {
      setLoading(true);
      fieldConfig.api(value, type).then((response) => {
        setDataSource(response.data);
        setLoading(false);
      })
    }
  };

  return (
    <React.Fragment>
      <Field name={fieldConfig.name} id={fieldConfig.name}>
        {
          ({field, form, meta}) => {
            return (
              <React.Fragment>
                <Row gutter={10}>
                  <Col span={22}>
                    <Input
                      value={field.value}
                      name={fieldConfig.name}
                      disabled={fieldConfig.disabled ? fieldConfig.disabled : readOnly}
                      placeholder={fieldConfig.placeholder}
                    />
                  </Col>
                  <Col span={2}>
                    <Button
                      icon="search"
                      loading={loading}
                      className={style.SearchButton}
                      onClick={() => {onSearch(form.values[fieldConfig.searchValue], fieldConfig.searchParam)}}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={24} className={style.AuthorityTable}>
                    <AuthoritySelectTable
                      dataSource={dataSource}
                      onSelect={(val) => form.setFieldValue(fieldConfig.name, val)}
                      tableColumnTitle={fieldConfig.tableColumnTitle}
                      tableColumnField={fieldConfig.tableColumnField}
                    />
                  </Col>
                </Row>
              </React.Fragment>
            )
          }
        }
      </Field>
    </React.Fragment>
  )
};

export default AuthoritySelect;
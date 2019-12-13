import React from 'react';
import {Button, Col, Icon, Row} from "antd";
import RemoteSelect from "./RemoteSelect";
import style from "./RemoteSelectWithEdit.module.css"

const RemoteSelectWithEdit = ({fieldConfig, disabled, ...props}) => {
  const ButtonGroup = Button.Group;

  return (
    <Row gutter={10}>
      <Col md={20} xs={24}>
        <RemoteSelect
          fieldConfig={fieldConfig}
          disabled={fieldConfig.disabled ? fieldConfig.disabled : disabled}
          {...props}
        />
      </Col>
      <Col md={4} xs={24}>
        <ButtonGroup>
          <Button type={'default'} className={style.Button}><Icon type={'edit'}/></Button>
          <Button type={'default'} className={style.Button}><Icon type={'plus'}/></Button>
        </ButtonGroup>
      </Col>
    </Row>
  );
};

export default RemoteSelectWithEdit;
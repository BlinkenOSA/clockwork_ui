import React from 'react';
import {Card, Col, Divider, Layout, Row} from "antd";
import { Typography } from 'antd';
import style from './Login.module.css';
import logo from '../../../images/osa_logo.png';
import LoginForm from "./LoginForm";

const { Text, Title } = Typography;

const Login = () => {
  return (
    <Layout style={{ minHeight: '100vh', display: 'flex' }}>
      <Row justify="center" align="middle" style={{ height: '100vh' }} gutter={0} type="flex">
        <Col lg={6} md={18} sm={18} xs={18}>
          <Card className={style.LoginForm}>
            <Title level={2}>Login</Title>
            <Text>Sign in to your account</Text>
            <LoginForm/>
          </Card>
        </Col>
        <Col lg={6} md={0} sm={0} xs={0}>
          <Card className={style.LoginInfo}>
            <div style={{height: '100%'}}>
              <div className={style.Logo}>
                <img src={logo} alt="Logo" />
              </div>
              <Divider style={{color: '#FFF', marginBottom: '30px'}}><strong>Clock</strong>Work AMS</Divider>
              <Text style={{color: '#FFF'}}>
                Welcome to the Archival Management System of the Vera and Donald Blinken Open Society Archives!
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
};

export default Login;

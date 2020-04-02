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
        <Col lg={12}>
          <Card className={style.LoginBox}>
            <Row>
              <Col lg={12} md={24} sm={24} xs={24} className={style.LoginForm}>
                  <Title level={2}>Login</Title>
                  <Text>Sign in to your account</Text>
                  <LoginForm/>
              </Col>
              <Col lg={12} md={0} sm={0} xs={0} className={style.LoginInfo}>
                <div className={style.Logo}>
                  <img src={logo} alt="Logo" />
                </div>
                <Divider style={{color: '#FFF', marginBottom: '30px'}}><strong>Clock</strong>Work AMS</Divider>
                <Text style={{color: '#FFF'}}>
                  Welcome to the Archival Management System of the Vera and Donald Blinken Open Society Archives!
                </Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
};

export default Login;

import React, {useState} from 'react';
import {Formik} from "formik";
import {Form, FormItem, Input, SubmitButton} from "formik-antd";
import validation from './config/validation';
import style from "./Login.module.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {GET_TOKEN} from "../../../config/config-api";
import API from "../../../services/api";
import {setAuthTokens} from "axios-jwt";
import { useHistory } from "react-router-dom";
import {Alert} from "antd";

const LoginForm = () => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const authResponseToAuthTokens = (response) => {
    return {
      accessToken: response.data.access,
      refreshToken: response.data.refresh
    }
  };

  const handleSubmit = (values, actions) => {
    setLoading(true);
    API.post(GET_TOKEN, values).then((response) => {
      setLoading(false);
      setLoginError(false);
      setAuthTokens(authResponseToAuthTokens(response));
      history.push("/");
    }).catch((error) => {
      setLoading(false);
      setLoginError(true);
    })
  };

  return (
    <React.Fragment>
      {
        loginError &&
        <Alert message="Invalid login credentials" type="error" showIcon style={{marginTop: '10px'}} />
      }
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handleSubmit}
        validateOnBlur={false}
        validationSchema={validation}
      >
        <Form className={style.LoginFormik}>
          <FormItem name='username'>
            <Input
              addonBefore={<UserOutlined/>}
              name={'username'}
              placeholder={'User'}
            />
          </FormItem>
          <FormItem name='password'>
            <Input.Password
              addonBefore={<LockOutlined/>}
              name={'password'}
              placeholder={'Password'}
            />
          </FormItem>
          <SubmitButton
            loading={loading}
            style={{marginTop: '10px'}}
            disabled={false}
          >
            Submit
          </SubmitButton>
        </Form>
      </Formik>
    </React.Fragment>
  )
};

export default LoginForm;

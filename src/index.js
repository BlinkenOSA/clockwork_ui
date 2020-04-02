import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createBrowserHistory } from 'history';
import store from "./store/store";
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import { isLoggedIn } from "axios-jwt";
import { LOGIN } from "./config/config-urls";
import "antd/dist/antd.less";

import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import Login from "./components/Login/LoginForm/Login";

const history = createBrowserHistory();
const rootElement = document.getElementById('root');

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLoggedIn() === true
      ? <Component {...props} />
      : <Redirect to={ LOGIN } />
  )} />
);

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" name="Login Page" component={ Login }/>
          <PrivateRoute path="/" component={ DefaultLayout }/>
        </Switch>
      </Router>
    </Provider>
  )
};

const render = () => {
  ReactDOM.render(<App />, rootElement);
};

store.subscribe(render);
render();

import React from "react";
import {LOGIN, LOGOUT} from "../../config-urls";

const authenticationRoutes = () => {
  const login = React.lazy(() => import('../../../components/User/LoginForm/Login'));

  return [
    {path: LOGIN, exact: true, component: login},
  ];
};

export default authenticationRoutes;

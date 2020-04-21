import React from "react";
import {
  PROFILE
} from "../../config-urls";

const userRoutes = () => {
  const UserProfileForm = React.lazy(() => import('../../../components/User/UserProfileForm/UserProfileForm'));

  return [
    {path: PROFILE, exact: true, component: UserProfileForm},
  ];
};

export default userRoutes;

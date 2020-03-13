import React from "react";
import {ISAAR_LIST} from "../../config-urls";

const isaarRoutes = () => {
  const IsaarList = React.lazy(() => import('../../../views/isaar/IsaarList/IsaarList'));
  //const DonorForm = React.lazy(() => import('../../../views/donor/DonorForm/DonorForm'));

  return [
    {path: ISAAR_LIST, exact: true, component: IsaarList},
  ];
};

export default isaarRoutes;
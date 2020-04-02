import React from "react";
import {
  ISAAR_CREATE,
  ISAAR_EDIT,
  ISAAR_LIST,
  ISAAR_VIEW
} from "../../config-urls";

const isaarRoutes = () => {
  const IsaarList = React.lazy(() => import('../../../views/isaar/IsaarList/IsaarList'));
  const IsaarForm = React.lazy(() => import('../../../views/isaar/IsaarForm/IsaarForm'));

  return [
    {path: ISAAR_LIST, exact: true, component: IsaarList},
    {path: ISAAR_CREATE, exact: true, component: IsaarForm, action: 'create'},
    {path: ISAAR_VIEW, exact: true, component: IsaarForm, action: 'view'},
    {path: ISAAR_EDIT, exact: true, component: IsaarForm, action: 'edit'}
  ];
};

export default isaarRoutes;

import React from "react";
import {
  ISAD_CREATE,
  ISAD_EDIT,
  ISAD_LIST,
  ISAD_VIEW
} from "../../config-urls";

const isadRoutes = () => {
  const IsadList = React.lazy(() => import('../../../views/isad/IsadList/IsadList'));
  const IsadForm = React.lazy(() => import('../../../views/isad/IsadForm/IsadForm'));

  return [
    {path: ISAD_LIST, exact: true, component: IsadList},
    {path: ISAD_VIEW, exact: true, component: IsadForm, action: 'view'},
    {path: ISAD_CREATE, exact: true, component: IsadForm, action: 'create'},
    {path: ISAD_EDIT, exact: true, component: IsadForm, action: 'edit'},
  ];
};

export default isadRoutes;

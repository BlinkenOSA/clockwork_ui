import React from "react";
import {ACCESS_RIGHTS_LIST} from "../../config-urls";

const accessionRoutes = () => {
  const AccessionList = React.lazy(() => import('../../../views/controlled_list/AccessRights/AccessRightsList/AccessRightsList'));

  return [
    {path: ACCESS_RIGHTS_LIST, exact: true, component: AccessionList},
  ];
};

export default accessionRoutes;
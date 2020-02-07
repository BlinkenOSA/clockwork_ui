import React from "react";
import {
  CORPORATION_LIST,
} from "../../config-urls";
import popupFormRoutes from "../popupFormRoutes";

const authorityListRoutes = () => {
  const CorporationList = React.lazy(() => import('../../../views/authority_list/Corporation/CorporationList/CorporationList'));

  return [
    ...popupFormRoutes(CORPORATION_LIST, CorporationList),
  ]
};

export default authorityListRoutes;
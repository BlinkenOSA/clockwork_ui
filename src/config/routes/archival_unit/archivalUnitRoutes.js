import React from "react";
import {
  ARCHIVAL_UNIT_LIST,
} from "../../config-urls";
import popupFormRoutes from "../popupFormRoutes";

const archivalUnitRoutes = () => {
  const ArchivalUnitList = React.lazy(() => import('../../../views/archival_unit/ArchivalUnitList/ArchivalUnitList'));

  return [
    ...popupFormRoutes(ARCHIVAL_UNIT_LIST, ArchivalUnitList),
  ]
};

export default archivalUnitRoutes;
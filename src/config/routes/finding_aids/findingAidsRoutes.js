import React from "react";
import {FINDING_AIDS} from "../../config-urls";

const donorRoutes = () => {
  const ArchivalUnitSelect = React.lazy(() => import('../../../views/finding_aids/ArchivalUnitSelect/ArchivalUnitSelect'));

  return [
    {path: FINDING_AIDS, exact: true, component: ArchivalUnitSelect},
  ];
};

export default donorRoutes;

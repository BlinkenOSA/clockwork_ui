import React from "react";
import {CONTAINER_LIST, FINDING_AIDS} from "../../config-urls";

const donorRoutes = () => {
  const ArchivalUnitSelect = React.lazy(() => import('../../../views/finding_aids/ArchivalUnitSelect/ArchivalUnitSelect'));
  const ContainerList = React.lazy(() => import('../../../views/finding_aids/ContainerList/ContainerList'));

  return [
    {path: FINDING_AIDS, exact: true, component: ArchivalUnitSelect},
    {path: CONTAINER_LIST, exact: true, component: ContainerList}
  ];
};

export default donorRoutes;

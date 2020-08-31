import React from "react";
import {CONTAINER_LIST, FINDING_AIDS, FINDING_AIDS_EDIT} from "../../config-urls";

const donorRoutes = () => {
  const ArchivalUnitSelect = React.lazy(() => import('../../../views/finding_aids/ArchivalUnitSelect/ArchivalUnitSelect'));
  const ContainerList = React.lazy(() => import('../../../views/finding_aids/ContainerList/ContainerList'));
  const FindingAidsEntityForm = React.lazy(() => import('../../../views/finding_aids/FindingAidsEntityForm/FindingAidsEntityForm'));

  return [
    {path: FINDING_AIDS, exact: true, component: ArchivalUnitSelect},
    {path: CONTAINER_LIST, exact: true, component: ContainerList},
    {path: FINDING_AIDS_EDIT, exact: true, component: FindingAidsEntityForm, action: 'edit'}
  ];
};

export default donorRoutes;

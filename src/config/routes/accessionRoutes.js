import React from "react";
import {ACCESSION_CREATE, ACCESSION_EDIT, ACCESSION_LIST, ACCESSION_VIEW} from "../config-urls";

const accessionRoutes = () => {
  const AccessionList = React.lazy(() => import('../../views/accession/AccessionList/AccessionList'));
  const AccessionForm = React.lazy(() => import('../../views/accession/AccessionForm/AccessionForm'));

  return [
    {path: ACCESSION_LIST, exact: true, component: AccessionList},
    {path: ACCESSION_CREATE, exact: true, component: AccessionForm, action: 'create'},
    {path: ACCESSION_VIEW, exact: true, component: AccessionForm, action: 'view'},
    {path: ACCESSION_EDIT, exact: true, component: AccessionForm, action: 'edit'}
  ];
};

export default accessionRoutes;
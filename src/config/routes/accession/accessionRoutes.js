import React from "react";
import {ACCESSION_CREATE, ACCESSION_EDIT, ACCESSION_LIST, ACCESSION_VIEW} from "../../config-urls";

const accessionRoutes = () => {
  const list = React.lazy(() => import('../../../views/accession/AccessionList/AccessionList'));
  const form = React.lazy(() => import('../../../views/accession/AccessionForm/AccessionForm'));

  return [
    {path: ACCESSION_LIST, exact: true, component: list},
    {path: ACCESSION_CREATE, exact: true, component: form, action: 'create'},
    {path: ACCESSION_VIEW, exact: true, component: form, action: 'view'},
    {path: ACCESSION_EDIT, exact: true, component: form, action: 'edit'}
  ];
};

export default accessionRoutes;
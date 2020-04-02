import React from "react";
import {DONOR_CREATE, DONOR_EDIT, DONOR_LIST, DONOR_VIEW} from "../../config-urls";

const donorRoutes = () => {
  const DonorList = React.lazy(() => import('../../../views/donor/DonorList/DonorList'));
  const DonorForm = React.lazy(() => import('../../../views/donor/DonorForm/DonorForm'));

  return [
    {path: DONOR_LIST, exact: true, component: DonorList},
    {path: DONOR_CREATE, exact: true, component: DonorForm, action: 'create'},
    {path: DONOR_VIEW, exact: true, component: DonorForm, action: 'view'},
    {path: DONOR_EDIT, exact: true, component: DonorForm, action: 'edit'}
  ];
};

export default donorRoutes;
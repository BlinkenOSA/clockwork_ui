import React from 'react';
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";
import DonorFormFields from "./DonorFormFields";

const DonorForm = (props) => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <DonorFormFields {...props}/>
    </React.Fragment>
  )
};

export default DonorForm;
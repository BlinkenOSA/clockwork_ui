import React from 'react';
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";
import DonorFormFields from "./DonorFormFields";
import donor from "../../../services/donor/Donor";

const DonorForm = (props) => {
  const breadcrumbRender = (data) => {
    return data['name'];
  };

  return(
    <React.Fragment>
      <BreadcrumbMenu
        serviceClass={donor}
        breadcrumbRender={breadcrumbRender}
        {...props}
      />
      <DonorFormFields {...props}/>
    </React.Fragment>
  )
};

export default DonorForm;

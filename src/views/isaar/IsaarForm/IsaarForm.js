import React from 'react';
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";
import IsaarFormFields from "./IsaarFormFields";
import isaar from "../../../services/isaar/Isaar";

const IsaarForm = (props) => {
  const breadcrumbRender = (data) => {
    return [{text: `${data['name']} (${data['type']})`}];
  };

  return(
    <React.Fragment>
      <BreadcrumbMenu
        serviceClass={isaar}
        breadcrumbRender={breadcrumbRender}
        {...props}
      />
      <IsaarFormFields {...props}/>
    </React.Fragment>
  )
};

export default IsaarForm;

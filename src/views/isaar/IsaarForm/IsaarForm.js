import React from 'react';
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";
import IsaarFormFields from "./IsaarFormFields";

const IsaarForm = (props) => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <IsaarFormFields {...props}/>
    </React.Fragment>
  )
};

export default IsaarForm;

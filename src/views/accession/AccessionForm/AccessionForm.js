import React from 'react';
import FormMaker from "../../../components/FormMaker/FormMaker";
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";
import accession from "../../../services/Accession";
import fields from './config/fields';

const AccessionForm = (props) => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <FormMaker
        serviceClass={accession}
        fieldConfig={fields}
        {...props}
      />
    </React.Fragment>
  )
};

export default AccessionForm;
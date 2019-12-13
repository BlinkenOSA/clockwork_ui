import React from 'react';
import FormMaker from "../../../components/FormMaker/FormMaker";
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";
import accession from "../../../services/Accession";
import fields from './config/fields';
import {ACCESSION_LIST} from "../../../config/config-urls";

const AccessionForm = (props) => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <FormMaker
        serviceClass={accession}
        fieldConfig={fields}
        backPath={ACCESSION_LIST}
        {...props}
      />
    </React.Fragment>
  )
};

export default AccessionForm;
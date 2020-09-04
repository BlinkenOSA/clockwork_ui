import React from 'react';
import FormMaker from "../../../components/FormMaker/FormMaker";
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";
import accession from "../../../services/accession/Accession";
import fields from './config/fields';
import {ACCESSION_LIST} from "../../../config/config-urls";
import validation from "./config/validation";

const AccessionForm = (props) => {
  const breadcrumbRender = (data) => {
    return `${data['seq']} (Accession Record)`;
  };

  return(
    <React.Fragment>
      <BreadcrumbMenu
        serviceClass={accession}
        breadcrumbRender={breadcrumbRender}
        {...props}
      />
      <FormMaker
        serviceClass={accession}
        fieldConfig={fields}
        backPath={ACCESSION_LIST}
        recordName={'Accession'}
        validation={validation}
        info={true}
        {...props}
      />
    </React.Fragment>
  )
};

export default AccessionForm;

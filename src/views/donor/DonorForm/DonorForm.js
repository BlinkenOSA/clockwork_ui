import React from 'react';
import FormMaker from "../../../components/FormMaker/FormMaker";
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";
import donor from "../../../services/Donor";
import fields from './config/fields';
import {DONOR_LIST} from "../../../config/config-urls";

const DonorForm = (props) => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <FormMaker
        serviceClass={donor}
        fieldConfig={fields}
        backPath={DONOR_LIST}
        {...props}
      />
    </React.Fragment>
  )
};

export default DonorForm;
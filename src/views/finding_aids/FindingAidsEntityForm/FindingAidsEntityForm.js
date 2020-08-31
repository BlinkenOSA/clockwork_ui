import React from 'react';
import FormMaker from "../../../components/FormMaker/FormMaker";
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";
import finding_aids from "../../../services/finding_aids/FindingAids";
import fields from './config/fields';
import validation from "./config/validation";
import {CONTAINER_LIST} from "../../../config/config-urls";

const FindingAidsEntityForm = (props) => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <FormMaker
        serviceClass={finding_aids}
        fieldConfig={fields}
        backPath={CONTAINER_LIST}
        recordName={'Finding Aids'}
        validation={validation}
        info={true}
        {...props}
      />
    </React.Fragment>
  )
};

export default FindingAidsEntityForm;

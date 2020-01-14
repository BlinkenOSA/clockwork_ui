import React from "react";
import FormMaker from "../../../components/FormMaker/FormMaker";
import donor from "../../../services/donor/Donor";
import fields from "./config/fields";
import {DONOR_LIST} from "../../../config/config-urls";
import validation from "./config/validation";

const AccessRightsForm = (props) => {
  return(
    <FormMaker
      serviceClass={donor}
      fieldConfig={fields}
      backPath={DONOR_LIST}
      recordName={'Donor'}
      validation={validation}
      {...props}
    />
  )
};

export default AccessRightsForm;
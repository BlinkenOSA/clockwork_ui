import React from "react";
import FormMaker from "../../../components/FormMaker/FormMaker";
import isaar from "../../../services/isaar/Isaar";
import fields from "./config/fields";
import {ISAAR_LIST} from "../../../config/config-urls";
import validation from "./config/validation";

const IsaarFormFields = (props) => {
  return (
    <FormMaker
      serviceClass={isaar}
      fieldConfig={fields}
      backPath={ISAAR_LIST}
      recordName={'ISAAR-CPF'}
      validation={validation}
      info={true}
      initialValues={{
        institution_identifier: 'HU OSA',
        status: 'Draft',
        level_of_detail: 'Minimal'
      }}
      {...props}
    />
  )
};

export default IsaarFormFields;

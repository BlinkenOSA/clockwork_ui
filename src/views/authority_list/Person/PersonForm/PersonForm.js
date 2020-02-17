import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import corporation from "../../../../services/authority_list/Corporation";
import fields from "./config/fields";
import validation from "./config/validation";

const PersonForm = (props) => {
  return(
    <FormMaker
      serviceClass={corporation}
      fieldConfig={fields}
      recordName={'Corporation'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default PersonForm;
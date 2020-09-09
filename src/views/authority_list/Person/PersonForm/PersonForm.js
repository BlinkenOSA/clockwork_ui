import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import corporation from "../../../../services/authority_list/Corporation";
import fields from "./config/fields";
import validation from "./config/validation";
import person from "../../../../services/authority_list/Person";

const PersonForm = (props) => {
  return(
    <FormMaker
      serviceClass={person}
      fieldConfig={fields}
      recordName={'Person'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default PersonForm;
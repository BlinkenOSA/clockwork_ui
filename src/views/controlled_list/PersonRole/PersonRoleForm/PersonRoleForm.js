import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from "./config/fields";
import validation from "./config/validation";
import person_role from "../../../../services/controlled_list/PersonRole";

const PersonRoleForm = (props) => {
  return(
    <FormMaker
      serviceClass={person_role}
      fieldConfig={fields}
      recordName={'Person Role'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default PersonRoleForm;
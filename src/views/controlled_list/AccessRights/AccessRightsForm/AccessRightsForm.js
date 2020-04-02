import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import access_rights from "../../../../services/controlled_list/AccessRights";
import fields from "./config/fields";
import validation from "./config/validation";

const AccessRightsForm = (props) => {
  return(
    <FormMaker
      serviceClass={access_rights}
      fieldConfig={fields}
      recordName={'Access rights'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default AccessRightsForm;
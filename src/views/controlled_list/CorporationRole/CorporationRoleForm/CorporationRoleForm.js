import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from "./config/fields";
import validation from "./config/validation";
import corporation_role from "../../../../services/controlled_list/CorporationRole";

const CorporationRoleForm = (props) => {
  return(
    <FormMaker
      serviceClass={corporation_role}
      fieldConfig={fields}
      recordName={'Building'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default CorporationRoleForm;
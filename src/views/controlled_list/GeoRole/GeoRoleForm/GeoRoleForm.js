import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from "./config/fields";
import validation from "./config/validation";
import geo_role from "../../../../services/controlled_list/GeoRole";

const GeoRoleForm = (props) => {
  return(
    <FormMaker
      serviceClass={geo_role}
      fieldConfig={fields}
      recordName={'Geo Role'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default GeoRoleForm;
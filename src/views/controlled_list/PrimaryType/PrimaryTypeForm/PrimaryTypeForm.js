import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from "./config/fields";
import validation from "./config/validation";
import primary_type from "../../../../services/controlled_list/PrimaryType";

const PrimaryTypeForm = (props) => {
  return(
    <FormMaker
      serviceClass={primary_type}
      fieldConfig={fields}
      recordName={'Primary Type'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default PrimaryTypeForm;
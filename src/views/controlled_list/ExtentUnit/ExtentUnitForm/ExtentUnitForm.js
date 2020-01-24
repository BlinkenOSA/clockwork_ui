import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from "./config/fields";
import validation from "./config/validation";
import extent_unit from "../../../../services/controlled_list/ExtentUnit";

const ExtentUnitForm = (props) => {
  return(
    <FormMaker
      serviceClass={extent_unit}
      fieldConfig={fields}
      recordName={'Extent Unit'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default ExtentUnitForm;
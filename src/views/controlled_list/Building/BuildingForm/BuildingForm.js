import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import building from "../../../../services/controlled_list/Building";
import fields from "./config/fields";
import validation from "./config/validation";

const BuildingForm = (props) => {
  return(
    <FormMaker
      serviceClass={building}
      fieldConfig={fields}
      recordName={'Building'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default BuildingForm;
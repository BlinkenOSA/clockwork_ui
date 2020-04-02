import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from "./config/fields";
import validation from "./config/validation";
import reproduction_rights from "../../../../services/controlled_list/ReproductionRights";

const ReproductionRightForm = (props) => {
  return(
    <FormMaker
      serviceClass={reproduction_rights}
      fieldConfig={fields}
      recordName={'Reproduction Rights'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default ReproductionRightForm;
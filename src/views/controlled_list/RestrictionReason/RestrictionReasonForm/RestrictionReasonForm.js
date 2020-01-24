import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from "./config/fields";
import validation from "./config/validation";
import restriction_reason from "../../../../services/controlled_list/RestrictionReason";

const RestrictionReasonForm = (props) => {
  return(
    <FormMaker
      serviceClass={restriction_reason}
      fieldConfig={fields}
      recordName={'Restriction Reason'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default RestrictionReasonForm;
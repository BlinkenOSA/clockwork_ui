import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from "./config/fields";
import validation from "./config/validation";
import language_usage from "../../../../services/controlled_list/LanguageUsage";

const LanguageUsageForm = (props) => {
  return(
    <FormMaker
      serviceClass={language_usage}
      fieldConfig={fields}
      recordName={'Language Usage'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default LanguageUsageForm;
import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from "./config/fields";
import validation from "./config/validation";
import language from "../../../../services/authority_list/Language";

const LanguageForm = (props) => {
  return(
    <FormMaker
      serviceClass={language}
      fieldConfig={fields}
      recordName={'Language'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default LanguageForm;
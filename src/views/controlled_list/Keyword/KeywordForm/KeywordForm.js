import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from "./config/fields";
import validation from "./config/validation";
import keyword from "../../../../services/controlled_list/Keyword";

const KeywordForm = (props) => {
  return(
    <FormMaker
      serviceClass={keyword}
      fieldConfig={fields}
      recordName={'Keyword'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default KeywordForm;
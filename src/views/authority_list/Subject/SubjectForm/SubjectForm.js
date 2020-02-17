import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from "./config/fields";
import validation from "./config/validation";
import subject from "../../../../services/authority_list/Subject";

const SubjectForm = (props) => {
  return(
    <FormMaker
      serviceClass={subject}
      fieldConfig={fields}
      recordName={'Subject'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default SubjectForm;
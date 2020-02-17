import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import genre from "../../../../services/authority_list/Genre";
import fields from "./config/fields";
import validation from "./config/validation";

const GenreForm = (props) => {
  return(
    <FormMaker
      serviceClass={genre}
      fieldConfig={fields}
      recordName={'Corporation'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default GenreForm;
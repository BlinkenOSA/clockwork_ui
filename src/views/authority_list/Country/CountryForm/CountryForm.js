import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from "./config/fields";
import validation from "./config/validation";
import country from "../../../../services/authority_list/Country";

const CountryForm = (props) => {
  return(
    <FormMaker
      serviceClass={country}
      fieldConfig={fields}
      recordName={'Corporation'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default CountryForm;
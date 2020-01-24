import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from "./config/fields";
import validation from "./config/validation";
import date_type from "../../../../services/controlled_list/DateType";

const DateTypeForm = (props) => {
  return(
    <FormMaker
      serviceClass={date_type}
      fieldConfig={fields}
      recordName={'Data Type'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default DateTypeForm;
import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from "./config/fields";
import validation from "./config/validation";
import archivalUnitTheme from "../../../../services/controlled_list/ArchivalUnitTheme";

const ArchivalUnitThemeForm = (props) => {
  return(
    <FormMaker
      serviceClass={archivalUnitTheme}
      fieldConfig={fields}
      recordName={'Archival Unit Theme'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default ArchivalUnitThemeForm;
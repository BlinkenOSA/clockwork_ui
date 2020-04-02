import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from "./config/fields";
import validation from "./config/validation";
import place from "../../../../services/authority_list/Place";

const PlaceForm = (props) => {
  return(
    <FormMaker
      serviceClass={place}
      fieldConfig={fields}
      recordName={'Place'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default PlaceForm;
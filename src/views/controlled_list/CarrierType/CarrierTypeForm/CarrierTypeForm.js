import React from "react";
import FormMaker from "../../../../components/FormMaker/FormMaker";
import carrier_type from "../../../../services/controlled_list/CarrierType";
import fields from "./config/fields";
import validation from "./config/validation";

const CarrierTypeForm = (props) => {
  return(
    <FormMaker
      serviceClass={carrier_type}
      fieldConfig={fields}
      recordName={'Carrier Types'}
      validation={validation}
      info={false}
      {...props}
    />
  )
};

export default CarrierTypeForm;
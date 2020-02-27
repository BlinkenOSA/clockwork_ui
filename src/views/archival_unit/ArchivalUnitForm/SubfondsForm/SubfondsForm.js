import React from 'react';
import FormMaker from "../../../../components/FormMaker/FormMaker";
import fields from './config/fields';
import validation from "./config/validation";
import archival_unit from "../../../../services/archival_unit/ArchivalUnit";

const SubfondsForm = (props) => {
  return(
    <React.Fragment>
      <FormMaker
        serviceClass={archival_unit}
        fieldConfig={fields}
        recordName={'Subfonds'}
        validation={validation}
        {...props}
      />
    </React.Fragment>
  )
};

export default SubfondsForm;
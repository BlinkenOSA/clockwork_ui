import React from 'react';
import FormMaker from "../../../components/FormMaker/FormMaker";
import fields from './config/fields';
import validation from "./config/validation";
import container from "../../../services/container/Container";

const ContainerEditForm = (props) => {
  return(
    <FormMaker
      action={'edit'}
      serviceClass={container}
      fieldConfig={fields}
      validation={validation}
      recordName={'Container'}
      type={'drawer'}
      {...props}
    />
  )
};

export default ContainerEditForm;

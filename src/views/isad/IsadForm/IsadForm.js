import React from "react";
import FormMaker from "../../../components/FormMaker/FormMaker";
import isad from "../../../services/isad/Isad";
import fields from "./config/fields";
import {ISAD_LIST} from "../../../config/config-urls";
import validation from "./config/validation";
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";

const IsadForm = (props) => {
  const breadcrumbRender = (data) => {
    return data['title_full'];
  };

  return (
    <React.Fragment>
      <BreadcrumbMenu
        serviceClass={isad}
        breadcrumbRender={breadcrumbRender}
        {...props}
      />
      <FormMaker
        serviceClass={isad}
        fieldConfig={fields}
        backPath={ISAD_LIST}
        recordName={'ISAD(G)'}
        validation={validation}
        info={true}
        {...props}
      />
    </React.Fragment>
  )
};

export default IsadForm;

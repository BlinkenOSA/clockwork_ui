import React from 'react';
import FormMaker from "../../../components/FormMaker/FormMaker";
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";
import finding_aids from "../../../services/finding_aids/FindingAids";
import fields from './config/fields';
import validation from "./config/validation";
import {CONTAINER_LIST} from "../../../config/config-urls";

const FindingAidsEntityForm = (props) => {
  const breadcrumbRender = (data) => {
    return [
      {text: data['archival_unit_title'], link: CONTAINER_LIST.replace(':archival_unit', data.archival_unit)},
      {text: data['container_title']},
      {text: data['title']}
    ]
  };

  return(
    <React.Fragment>
      <BreadcrumbMenu
        serviceClass={finding_aids}
        breadcrumbRender={breadcrumbRender}
        {...props}
      />
      <FormMaker
        serviceClass={finding_aids}
        fieldConfig={fields}
        backPath={CONTAINER_LIST}
        recordName={'Finding Aids'}
        validation={validation}
        info={true}
        {...props}
      />
    </React.Fragment>
  )
};

export default FindingAidsEntityForm;

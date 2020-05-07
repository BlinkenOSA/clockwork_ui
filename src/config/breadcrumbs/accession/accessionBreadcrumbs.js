import {
  ACCESSION_EDIT, ACCESSION_LIST, ACCESSION_VIEW, ACCESSION_CREATE
} from "../../config-urls";
import React from "react";

const accessionBreadcrumbs = () => {
  const singularText = 'Accession Record';
  return [{
    path: ACCESSION_LIST,
    breadcrumbs: [
      { text: singularText }
    ]
  }, {
    path: ACCESSION_CREATE,
    breadcrumbs: [
      { text: `${singularText}s`, link: ACCESSION_LIST },
      { text: `Create ${singularText}`}
    ]
  }, {
    path: ACCESSION_VIEW,
    breadcrumbs: [
      { text: `${singularText}s`, link: ACCESSION_LIST },
      { text: `View ${singularText}`}
    ]
  }, {
    path: ACCESSION_EDIT,
    breadcrumbs: [
      { text: `${singularText}s`, link: ACCESSION_LIST },
      { text: `Edit ${singularText}`}
    ]
  }];
};

export default accessionBreadcrumbs;

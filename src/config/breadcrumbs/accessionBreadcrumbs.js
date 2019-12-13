import {
  ACCESSION_EDIT, ACCESSION_LIST, ACCESSION_VIEW, ACCESSION_CREATE
} from "../config-urls";

const accessionBreadcrumbs = () => {
  const singularText = 'Accession Record';
  return [{
    path: ACCESSION_LIST,
    breadcrumbs: [
      { text: singularText, icon: 'swap' }
    ]
  }, {
    path: ACCESSION_CREATE,
    breadcrumbs: [
      { text: `${singularText}s`, link: ACCESSION_LIST, icon: 'swap' },
      { text: `Create ${singularText}`}
    ]
  }, {
    path: ACCESSION_VIEW,
    breadcrumbs: [
      { text: `${singularText}s`, link: ACCESSION_LIST, icon: 'swap' },
      { text: `View ${singularText}`}
    ]
  }, {
    path: ACCESSION_EDIT,
    breadcrumbs: [
      { text: `${singularText}s`, link: ACCESSION_LIST, icon: 'swap' },
      { text: `Edit ${singularText}`}
    ]
  }];
};

export default accessionBreadcrumbs;
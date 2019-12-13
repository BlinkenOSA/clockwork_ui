import {
  DONOR_CREATE, DONOR_EDIT, DONOR_LIST, DONOR_VIEW,
} from "../config-urls";

const donorBreadcrumbs = () => {
  const singularText = 'Donor Record';
  return [{
    path: DONOR_LIST,
    breadcrumbs: [
      { text: singularText, icon: 'swap' }
    ]
  }, {
    path: DONOR_CREATE,
    breadcrumbs: [
      { text: `${singularText}s`, link: DONOR_LIST, icon: 'swap' },
      { text: `Create ${singularText}`}
    ]
  }, {
    path: DONOR_VIEW,
    breadcrumbs: [
      { text: `${singularText}s`, link: DONOR_LIST, icon: 'swap' },
      { text: `View ${singularText}`}
    ]
  }, {
    path: DONOR_EDIT,
    breadcrumbs: [
      { text: `${singularText}s`, link: DONOR_LIST, icon: 'swap' },
      { text: `Edit ${singularText}`}
    ]
  }];
};

export default donorBreadcrumbs;
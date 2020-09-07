import {
  FINDING_AIDS, CONTAINER_LIST, FINDING_AIDS_EDIT, FINDING_AIDS_VIEW
} from "../../config-urls";

const findingAidsBreadcrumbs = () => {
  return [{
    path: FINDING_AIDS,
    breadcrumbs: [
      { text: 'Finding Aids', icon: 'swap' },
      { text: 'Select Archival Unit', icon: 'swap' }
    ]
  }, {
    path: CONTAINER_LIST,
    breadcrumbs: [
      { text: 'Finding Aids', icon: 'swap' },
      { text: 'Containers', icon: 'swap' }
    ]
  }, {
    path: FINDING_AIDS_VIEW,
    breadcrumbs: [
      { text: 'Finding Aids', icon: 'swap' },
    ]
  }, {
    path: FINDING_AIDS_EDIT,
    breadcrumbs: [
      { text: 'Finding Aids', icon: 'swap' },
    ]
  }];
};

export default findingAidsBreadcrumbs;

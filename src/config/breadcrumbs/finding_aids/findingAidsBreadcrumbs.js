import {
  FINDING_AIDS, CONTAINER_LIST
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
  }];
};

export default findingAidsBreadcrumbs;

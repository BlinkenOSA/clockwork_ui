import {
  FINDING_AIDS,
} from "../../config-urls";

const findingAidsBreadcrumbs = () => {
  return [{
    path: FINDING_AIDS,
    breadcrumbs: [
      { text: 'Finding Aids', icon: 'swap' },
      { text: 'Select Archival Unit', icon: 'swap' }
    ]
  }];
};

export default findingAidsBreadcrumbs;

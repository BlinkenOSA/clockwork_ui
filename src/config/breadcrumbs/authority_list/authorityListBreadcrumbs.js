import {CORPORATION_LIST} from "../../config-urls";

const authorityListBreadcrumbs = () => {
  return [{
    path: CORPORATION_LIST,
    breadcrumbs: [
      {text: 'Corporation', icon: 'swap'}
    ]
  }]
};

export default authorityListBreadcrumbs;
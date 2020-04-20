import {
  PROFILE
} from "../../config-urls";

const userBreadcrumbs = () => {
  return [{
    path: PROFILE,
    breadcrumbs: [
      { text: 'My profile', icon: 'swap' }
    ]
  }];
};

export default userBreadcrumbs;

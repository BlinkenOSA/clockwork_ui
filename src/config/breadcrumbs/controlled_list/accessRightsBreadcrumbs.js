import {
  ACCESS_RIGHTS_LIST
} from "../../config-urls";

const accessRightsBreadcrumbs = () => {
  const singularText = 'Access Rights';
  return [{
    path: ACCESS_RIGHTS_LIST,
    breadcrumbs: [
      { text: singularText, icon: 'swap' }
    ]
  }];
};

export default accessRightsBreadcrumbs;
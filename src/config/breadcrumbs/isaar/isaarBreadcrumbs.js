import {
  ISAAR_CREATE, ISAAR_EDIT, ISAAR_LIST, ISAAR_VIEW,
} from "../../config-urls";

const isaarBreadcrumbs = () => {
  const singularText = 'ISAAR Record';
  return [{
    path: ISAAR_LIST,
    breadcrumbs: [
      { text: `${singularText}s`, icon: 'swap' }
    ]
  }, {
    path: ISAAR_CREATE,
    breadcrumbs: [
      { text: `${singularText}s`, link: ISAAR_LIST, icon: 'swap' },
      { text: `Create ${singularText}`}
    ]
  }, {
    path: ISAAR_VIEW,
    breadcrumbs: [
      { text: `${singularText}s`, link: ISAAR_LIST, icon: 'swap' },
    ]
  }, {
    path: ISAAR_EDIT,
    breadcrumbs: [
      { text: `${singularText}s`, link: ISAAR_LIST, icon: 'swap' },
    ]
  }];
};

export default isaarBreadcrumbs;

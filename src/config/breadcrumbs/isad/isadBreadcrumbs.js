import {
  ISAD_CREATE, ISAD_EDIT, ISAD_LIST, ISAD_VIEW,
} from "../../config-urls";

const isadBreadcrumbs = () => {
  const singularText = 'ISAD(G) Record';
  return [{
    path: ISAD_LIST,
    breadcrumbs: [
      { text: `${singularText}s`, icon: 'swap' }
    ]
  }, {
    path: ISAD_CREATE,
    breadcrumbs: [
      { text: `${singularText}s`, link: ISAD_LIST, icon: 'swap' },
      { text: `Create ${singularText}`}
    ]
  }, {
    path: ISAD_VIEW,
    breadcrumbs: [
      { text: `${singularText}s`, link: ISAD_LIST, icon: 'swap' },
      { text: `View ${singularText}`}
    ]
  }, {
    path: ISAD_EDIT,
    breadcrumbs: [
      { text: `${singularText}s`, link: ISAD_LIST, icon: 'swap' },
      { text: `Edit ${singularText}`}
    ]
  }];
};

export default isadBreadcrumbs;

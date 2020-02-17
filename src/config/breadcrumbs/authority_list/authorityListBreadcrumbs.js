import {
  CORPORATION_LIST,
  COUNTRY_LIST,
  GENRE_LIST,
  LANGUAGE_LIST,
  PERSON_LIST,
  PLACE_LIST,
  SUBJECT_LIST
} from "../../config-urls";

const authorityListBreadcrumbs = () => {
  return [{
    path: CORPORATION_LIST,
    breadcrumbs: [
      {text: 'Corporation', icon: 'bank'}
    ]
  }, {
    path: COUNTRY_LIST,
    breadcrumbs: [
      {text: 'Country', icon: 'flag'}
    ]
  }, {
    path: GENRE_LIST,
    breadcrumbs: [
      {text: 'Genre', icon: 'deployment-unit'}
    ]
  }, {
    path: LANGUAGE_LIST,
    breadcrumbs: [
      {text: 'Language', icon: 'global'}
    ]
  }, {
    path: PERSON_LIST,
    breadcrumbs: [
      {text: 'People', icon: 'team'}
    ]
  }, {
    path: PLACE_LIST,
    breadcrumbs: [
      {text: 'Place', icon: 'environment'}
    ]
  }, {
    path: SUBJECT_LIST,
    breadcrumbs: [
      {text: 'Subject', icon: 'tag'}
    ]
  }]
};

export default authorityListBreadcrumbs;
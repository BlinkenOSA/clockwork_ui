import {
  ACCESS_RIGHTS_LIST,
  ARCHIVAL_UNIT_THEME_LIST,
  BUILDING_LIST,
  CARRIER_TYPE_LIST,
  CORPORATION_ROLE_LIST,
  DATE_TYPE_LIST,
  EXTENT_UNIT_LIST,
  GEO_ROLE_LIST,
  KEYWORD_LIST,
  LANGUAGE_USAGE_LIST, PERSON_ROLE_LIST, PRIMARY_TYPE_LIST, REPRODUCTION_RIGHT_LIST, RESTRICTION_REASON_LIST,
} from "../../config-urls";

const controlledListBreadcrumbs = () => {
  return [{
    path: ACCESS_RIGHTS_LIST,
    breadcrumbs: [
      { text: 'Access Rights', icon: 'swap' }
    ]
  }, {
    path: ARCHIVAL_UNIT_THEME_LIST,
    breadcrumbs: [
      { text: 'Archival Unit Themes', icon: 'swap' }
    ]
  }, {
    path: BUILDING_LIST,
    breadcrumbs: [
      { text: 'Buildings', icon: 'swap' }
    ]
  }, {
    path: CARRIER_TYPE_LIST,
    breadcrumbs: [
      { text: 'Carrier Types', icon: 'swap' }
    ]
  }, {
    path: CORPORATION_ROLE_LIST,
    breadcrumbs: [
      { text: 'Corporation Roles', icon: 'swap' }
    ]
  }, {
    path: DATE_TYPE_LIST,
    breadcrumbs: [
      { text: 'Data Types', icon: 'swap' }
    ]
  }, {
    path: EXTENT_UNIT_LIST,
    breadcrumbs: [
      { text: 'Extent Units', icon: 'swap' }
    ]
  }, {
    path: GEO_ROLE_LIST,
    breadcrumbs: [
      { text: 'Geo Roles', icon: 'swap' }
    ]
  }, {
    path: KEYWORD_LIST,
    breadcrumbs: [
      { text: 'Keywords', icon: 'swap' }
    ]
  }, {
    path: LANGUAGE_USAGE_LIST,
    breadcrumbs: [
      { text: 'Language Usages', icon: 'swap' }
    ]
  }, {
    path: PERSON_ROLE_LIST,
    breadcrumbs: [
      { text: 'Person Roles', icon: 'swap' }
    ]
  }, {
    path: PRIMARY_TYPE_LIST,
    breadcrumbs: [
      { text: 'Primary Types', icon: 'swap' }
    ]
  }, {
    path: REPRODUCTION_RIGHT_LIST,
    breadcrumbs: [
      { text: 'Reproduction Rights', icon: 'swap' }
    ]
  }, {
    path: RESTRICTION_REASON_LIST,
    breadcrumbs: [
      { text: 'Restriction Reasons', icon: 'swap' }
    ]
  }];
};

export default controlledListBreadcrumbs;
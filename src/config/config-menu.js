import {
  ACCESS_RIGHTS_LIST,
  ACCESSION_LIST,
  ARCHIVAL_UNIT_THEME_LIST,
  BUILDING_LIST,
  CARRIER_TYPE_LIST, CORPORATION_LIST,
  CORPORATION_ROLE_LIST,
  DATE_TYPE_LIST,
  DONOR_LIST,
  EXTENT_UNIT_LIST,
  GEO_ROLE_LIST,
  KEYWORD_LIST,
  LANGUAGE_USAGE_LIST,
  PERSON_ROLE_LIST,
  PRIMARY_TYPE_LIST, REPRODUCTION_RIGHT_LIST, RESTRICTION_REASON_LIST
} from "./config-urls";

const configMenu = [
  {name: 'Dashboard', icon: 'dashboard', link: '/'},
  {name: 'Accession', icon: 'swap', submenu: [
      {name: 'Accession Records', link: ACCESSION_LIST},
      {name: 'Donors', link: DONOR_LIST},
  ]},
  {name: 'Archival Unit', icon: 'apartment', link: '/'},
  {name: 'ISAAR-CPF', icon: 'user', link: '/'},
  {name: 'ISAD(G)', icon: 'profile', link: '/'},
  {name: 'Finding Aids', icon: 'file', submenu: [
      {name: 'Folders / Items', link: '/'},
      {name: 'Organizer', link: '/'},
  ]},
  {name: 'Lists', icon: 'unordered-list', submenu: [
      {name: 'Authority List', submenu: [
          {name: 'Corporations', icon: 'bank', link: CORPORATION_LIST},
          {name: 'Countries', icon: 'flag', link: '/'},
          {name: 'Genres', icon: 'deployment-unit', link: '/'},
          {name: 'Languages', icon: 'global', link: '/'},
          {name: 'People', icon: 'team', link: '/'},
          {name: 'Places', icon: 'environment', link: '/'},
          {name: 'Subjects', icon: 'tag', link: '/'},
      ]},
      {name: 'Controlled List', submenu: [
          {name: 'Access Rights', icon: 'right-circle', link: ACCESS_RIGHTS_LIST},
          {name: 'Archival Unit Themes', icon: 'right-circle', link: ARCHIVAL_UNIT_THEME_LIST},
          {name: 'Building', icon: 'right-circle', link: BUILDING_LIST},
          {name: 'Carrier Types', icon: 'right-circle', link: CARRIER_TYPE_LIST},
          {name: 'Corporation Roles', icon: 'right-circle', link: CORPORATION_ROLE_LIST},
          {name: 'Date Types', icon: 'right-circle', link: DATE_TYPE_LIST},
          {name: 'Extent Units', icon: 'right-circle', link: EXTENT_UNIT_LIST},
          {name: 'Geo Roles', icon: 'right-circle', link: GEO_ROLE_LIST},
          {name: 'Keyword', icon: 'right-circle', link: KEYWORD_LIST},
          {name: 'Language Usages', icon: 'right-circle', link: LANGUAGE_USAGE_LIST},
          {name: 'Person Roles', icon: 'right-circle', link: PERSON_ROLE_LIST},
          {name: 'Primary Types', icon: 'right-circle', link: PRIMARY_TYPE_LIST},
          {name: 'Reproduction Rights', icon: 'right-circle', link: REPRODUCTION_RIGHT_LIST},
          {name: 'Restriction Reasons', icon: 'right-circle', link: RESTRICTION_REASON_LIST},
      ]},
  ]},
  {name: 'MLR', icon: 'inbox'},
  {name: 'Digitization', icon: 'desktop', submenu: [
      {name: 'Digitization Log', link: '/'},
      {name: 'Digitization Plan', link: '/'},
  ]},
];

export default configMenu;
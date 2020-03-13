import {
  ACCESS_RIGHTS_LIST,
  ACCESSION_LIST, ARCHIVAL_UNIT_LIST,
  ARCHIVAL_UNIT_THEME_LIST,
  BUILDING_LIST,
  CARRIER_TYPE_LIST, CORPORATION_LIST,
  CORPORATION_ROLE_LIST, COUNTRY_LIST,
  DATE_TYPE_LIST,
  DONOR_LIST,
  EXTENT_UNIT_LIST, GENRE_LIST,
  GEO_ROLE_LIST, ISAAR_LIST,
  KEYWORD_LIST, LANGUAGE_LIST,
  LANGUAGE_USAGE_LIST, PERSON_LIST,
  PERSON_ROLE_LIST, PLACE_LIST,
  PRIMARY_TYPE_LIST, REPRODUCTION_RIGHT_LIST, RESTRICTION_REASON_LIST, SUBJECT_LIST
} from "./config-urls";

const configMenu = [
  {name: 'Dashboard', icon: 'dashboard', link: '/'},
  {name: 'Accession', icon: 'swap', submenu: [
      {name: 'Accession Records', link: ACCESSION_LIST},
      {name: 'Donors', link: DONOR_LIST},
  ]},
  {name: 'Archival Unit', icon: 'apartment', link: ARCHIVAL_UNIT_LIST},
  {name: 'ISAAR-CPF', icon: 'user', link: ISAAR_LIST},
  {name: 'ISAD(G)', icon: 'profile', link: '/'},
  {name: 'Finding Aids', icon: 'file', submenu: [
      {name: 'Folders / Items', link: '/'},
      {name: 'Organizer', link: '/'},
  ]},
  {name: 'Lists', icon: 'unordered-list', submenu: [
      {name: 'Authority List', submenu: [
          {name: 'Corporations', icon: 'bank', link: CORPORATION_LIST},
          {name: 'Countries', icon: 'flag', link: COUNTRY_LIST},
          {name: 'Genres', icon: 'deployment-unit', link: GENRE_LIST},
          {name: 'Languages', icon: 'global', link: LANGUAGE_LIST},
          {name: 'People', icon: 'team', link: PERSON_LIST},
          {name: 'Places', icon: 'environment', link: PLACE_LIST},
          {name: 'Subjects', icon: 'tag', link: SUBJECT_LIST},
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
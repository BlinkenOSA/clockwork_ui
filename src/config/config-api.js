const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_API;

// Accession endpoints
export const ACCESSION_BASE = BACKEND_DOMAIN + '/v1/accession/';
export const ACCESSION_SELECT = BACKEND_DOMAIN + '/v1/accession/select/';

export const ACCESSION_COPYRIGHT_STATUS_SELECT = BACKEND_DOMAIN + '/v1/accession/select/accession_copyright_status/';
export const ACCESSION_METHOD_SELECT = BACKEND_DOMAIN + '/v1/accession/select/accession_method/';

// Donor endpoints
export const DONOR_BASE = BACKEND_DOMAIN + '/v1/donor/';
export const DONOR_SELECT = BACKEND_DOMAIN + '/v1/donor/select/';

// Archival Unit endpoints
export const ARCHIVAL_UNIT_BASE = BACKEND_DOMAIN + '/v1/archival_unit/';
export const ARCHIVAL_UNIT_FONDS = BACKEND_DOMAIN + '/v1/archival_unit/fonds/';
export const ARCHIVAL_UNIT_SUBFONDS = BACKEND_DOMAIN + '/v1/archival_unit/subfonds/';
export const ARCHIVAL_UNIT_SERIES = BACKEND_DOMAIN + '/v1/archival_unit/series/';
export const ARCHIVAL_UNIT_SELECT = BACKEND_DOMAIN + '/v1/archival_unit/select/';

// ISAAR endpoints
export const ISAAR_BASE = BACKEND_DOMAIN + '/v1/isaar/';
export const ISAAR_SELECT = BACKEND_DOMAIN + '/v1/isaar/select/';

// AUTHORITY LIST endpoints
// Authority list services
export const WIKIPEDIA_BASE = BACKEND_DOMAIN + '/v1/authority_list/wikipedia/';
export const VIAF_BASE = BACKEND_DOMAIN + '/v1/authority_list/viaf/';
export const LCSH_BASE = BACKEND_DOMAIN + '/v1/authority_list/lcsh/';

// Corporation
export const CORPORATION_BASE = BACKEND_DOMAIN + '/v1/authority_list/corporations/';
export const CORPORATION_SELECT = BACKEND_DOMAIN + '/v1/authority_list/select/corporations/';

// Country
export const COUNTRY_BASE = BACKEND_DOMAIN + '/v1/authority_list/countries/';
export const COUNTRY_SELECT = BACKEND_DOMAIN + '/v1/authority_list/select/countries/';

// Genres
export const GENRE_BASE = BACKEND_DOMAIN + '/v1/authority_list/genres/';
export const GENRE_SELECT = BACKEND_DOMAIN + '/v1/authority_list/select/genres/';

// Language
export const LANGUAGE_BASE = BACKEND_DOMAIN + '/v1/authority_list/languages/';
export const LANGUAGE_SELECT = BACKEND_DOMAIN + '/v1/authority_list/select/languages/';

// Person
export const PERSON_BASE = BACKEND_DOMAIN + '/v1/authority_list/people/';
export const PERSON_SELECT = BACKEND_DOMAIN + '/v1/authority_list/select/people/';

// Places
export const PLACE_BASE = BACKEND_DOMAIN + '/v1/authority_list/places/';
export const PLACE_SELECT = BACKEND_DOMAIN + '/v1/authority_list/select/places/';

// Places
export const SUBJECT_BASE = BACKEND_DOMAIN + '/v1/authority_list/subjects/';
export const SUBJECT_SELECT = BACKEND_DOMAIN + '/v1/authority_list/select/subjects/';


// CONTROLLED LIST endpoints
// Access Rights
export const ACCESS_RIGHTS_BASE = BACKEND_DOMAIN + '/v1/controlled_list/access_rights/';
export const ACCESS_RIGHTS_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/access_rights/';

// Archival Unit Theme
export const ARCHIVAL_UNIT_THEME_BASE = BACKEND_DOMAIN + '/v1/controlled_list/archival_unit_themes/';
export const ARCHIVAL_UNIT_THEME_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/archival_unit_themes/';

// Building
export const BUILDING_BASE = BACKEND_DOMAIN + '/v1/controlled_list/buildings/';
export const BUILDING_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/buildings/';

// Carrier Type
export const CARRIER_TYPE_BASE = BACKEND_DOMAIN + '/v1/controlled_list/carrier_types/';
export const CARRIER_TYPE_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/carrier_types/';

// Corporation Role
export const CORPORATION_ROLE_BASE = BACKEND_DOMAIN + '/v1/controlled_list/corporation_roles/';
export const CORPORATION_ROLE_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/corporation_roles/';

// Data Type
export const DATE_TYPE_BASE = BACKEND_DOMAIN + '/v1/controlled_list/date_types/';
export const DATE_TYPE_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/date_types/';

// Extent Unit
export const EXTENT_UNIT_BASE = BACKEND_DOMAIN + '/v1/controlled_list/extent_units/';
export const EXTENT_UNIT_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/extent_units/';

// Geo Role
export const GEO_ROLE_BASE = BACKEND_DOMAIN + '/v1/controlled_list/geo_roles/';
export const GEO_ROLE_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/geo_roles/';

// Keyword
export const KEYWORD_BASE = BACKEND_DOMAIN + '/v1/controlled_list/keywords/';
export const KEYWORD_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/keywords/';

// Language Usage
export const LANGUAGE_USAGE_BASE = BACKEND_DOMAIN + '/v1/controlled_list/language_usages/';
export const LANGUAGE_USAGE_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/language_usages/';

// Keyword
export const LOCALE_BASE = BACKEND_DOMAIN + '/v1/controlled_list/locales/';
export const LOCALE_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/locales/';

// Person Role
export const PERSON_ROLE_BASE = BACKEND_DOMAIN + '/v1/controlled_list/person_roles/';
export const PERSON_ROLE_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/person_roles/';

// Primary Type
export const PRIMARY_TYPE_BASE = BACKEND_DOMAIN + '/v1/controlled_list/primary_types/';
export const PRIMARY_TYPE_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/primary_types/';

// Reproduction Right
export const REPRODUCTION_RIGHTS_BASE = BACKEND_DOMAIN + '/v1/controlled_list/reproduction_rights/';
export const REPRODUCTION_RIGHTS_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/reproduction_rights/';

// Restriction Reason
export const RESTRICTION_REASON_BASE = BACKEND_DOMAIN + '/v1/controlled_list/rights_restriction/';
export const RESTRICTION_REASON_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/rights_restriction/';


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
export const ARCHIVAL_UNIT_SELECT = BACKEND_DOMAIN + '/v1/archival_unit/select/';

// Controlled List endpoints
export const BUILDING_SELECT = BACKEND_DOMAIN + '/v1/controlled_list/select/building/';

// Authority List endpoints
export const COUNTRY_SELECT = BACKEND_DOMAIN + '/v1/authority/select/countries/';

const BACKEND_DOMAIN = process.env.REACT_APP_BACKEND_API;

// Accession endpoints
export const ACCESSION_BASE = BACKEND_DOMAIN + '/v1/accession/';
export const ACCESSION_SELECT = BACKEND_DOMAIN + '/v1/accession/select';

export const ACCESSION_COPYRIGHT_STATUS_SELECT = BACKEND_DOMAIN + '/v1/accession/select/accession_copyright_status';
export const ACCESSION_METHOD_SELECT = BACKEND_DOMAIN + '/v1/accession/select/accession_method';
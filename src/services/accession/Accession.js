import API from '../api';
import {
  ACCESSION_BASE,
  ACCESSION_COPYRIGHT_STATUS_SELECT,
  ACCESSION_METHOD_SELECT,
  ACCESSION_PRE_CREATE
} from '../../config/config-api';

class Accession {
  list = (params, cancelToken) => {
    return API.get(ACCESSION_BASE, {params: params, cancelToken: cancelToken});
  };

  selectCopyrightStatus = (params) => {
    return API.get(ACCESSION_COPYRIGHT_STATUS_SELECT, {params: params});
  };

  selectAccessionMethod = (params) => {
    return API.get(ACCESSION_METHOD_SELECT, {params: params});
  };

  preCreate = () => {
    return API.get(ACCESSION_PRE_CREATE);
  };

  create = (formValues) => {
    return API.post(`${ACCESSION_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${ACCESSION_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${ACCESSION_BASE}${identifier}/`, formValues);
  }
}

const accession = new Accession();
export default accession;

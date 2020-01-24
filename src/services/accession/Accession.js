import axios from 'axios';
import {ACCESSION_BASE, ACCESSION_COPYRIGHT_STATUS_SELECT, ACCESSION_METHOD_SELECT} from '../../config/config-api';

class Accession {
  list = (params, cancelToken) => {
    return axios.get(ACCESSION_BASE, {params: params, cancelToken: cancelToken});
  };

  selectCopyrightStatus = (params) => {
    return axios.get(ACCESSION_COPYRIGHT_STATUS_SELECT, {params: params});
  };

  selectAccessionMethod = (params) => {
    return axios.get(ACCESSION_METHOD_SELECT, {params: params});
  };

  create = (formValues) => {
    return axios.post(`${ACCESSION_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${ACCESSION_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${ACCESSION_BASE}${identifier}/`, formValues);
  }
}

const accession = new Accession();
export default accession;
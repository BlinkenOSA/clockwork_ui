import axios from 'axios';
import {ACCESSION_BASE, ACCESSION_COPYRIGHT_STATUS_SELECT, ACCESSION_METHOD_SELECT} from '../config/config-api';

class Accession {
  list = (params) => {
    return axios.get(ACCESSION_BASE, {params: params});
  };

  selectCopyrightStatus = (params) => {
    return axios.get(ACCESSION_COPYRIGHT_STATUS_SELECT, {params: params});
  };

  selectAccessionMethod = (params) => {
    return axios.get(ACCESSION_METHOD_SELECT, {params: params});
  };

  read = (identifier) => {
    return axios.get(`${ACCESSION_BASE}${identifier}`);
  };
}

const accession = new Accession();
export default accession;
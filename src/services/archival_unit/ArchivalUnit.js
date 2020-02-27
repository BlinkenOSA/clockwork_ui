import axios from 'axios';
import {ARCHIVAL_UNIT_BASE, ARCHIVAL_UNIT_SELECT} from '../../config/config-api';

class ArchivalUnit {
  list = (params, cancelToken) => {
    return axios.get(ARCHIVAL_UNIT_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${ARCHIVAL_UNIT_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${ARCHIVAL_UNIT_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${ARCHIVAL_UNIT_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${ARCHIVAL_UNIT_BASE}${identifier}/`);
  };

  selectFonds = (params) => {
    params ? params['level'] = 'F' : params = {level: 'F'};
    return axios.get(ARCHIVAL_UNIT_SELECT, {params: params});
  };
}

const archival_unit = new ArchivalUnit();
export default archival_unit;
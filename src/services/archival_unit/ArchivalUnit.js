import API from '../api.js';
import {ARCHIVAL_UNIT_BASE, ARCHIVAL_UNIT_PRE_CREATE, ARCHIVAL_UNIT_SELECT} from '../../config/config-api';

class ArchivalUnit {
  list = (params, cancelToken) => {
    return API.get(ARCHIVAL_UNIT_BASE, {params: params, cancelToken: cancelToken});
  };

  preCreate = (identifier) => {
    if (identifier) {
      return API.get(`${ARCHIVAL_UNIT_PRE_CREATE}${identifier}/`);
    } else {
      return new Promise((resolve, reject) => {
        resolve({data: {level: "F"}})
      })
    }
  };

  create = (formValues) => {
    return API.post(ARCHIVAL_UNIT_BASE, formValues);
  };

  read = (identifier) => {
    return API.get(`${ARCHIVAL_UNIT_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${ARCHIVAL_UNIT_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${ARCHIVAL_UNIT_BASE}${identifier}/`);
  };

  selectFonds = (params) => {
    params ? params['level'] = 'F' : params = {level: 'F'};
    return API.get(ARCHIVAL_UNIT_SELECT, {params: params});
  };
}

const archival_unit = new ArchivalUnit();
export default archival_unit;

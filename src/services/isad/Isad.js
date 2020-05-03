import API from '../api.js';
import {ISAD_BASE, ISAD_PRE_CREATE} from '../../config/config-api';

class Isad {
  list = (params, cancelToken) => {
    return API.get(ISAD_BASE, {params: params, cancelToken: cancelToken});
  };

  preCreate = (identifier) => {
    return API.get(`${ISAD_PRE_CREATE}${identifier}/`);
  };

  create = (formValues) => {
    return API.post(`${ISAD_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${ISAD_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${ISAD_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${ISAD_BASE}${identifier}/`);
  };
}

const isad = new Isad();
export default isad;

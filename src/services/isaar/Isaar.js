import API from '../api.js';
import {ISAAR_BASE} from '../../config/config-api';

class Isaar {
  list = (params, cancelToken) => {
    return API.get(ISAAR_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${ISAAR_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${ISAAR_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${ISAAR_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${ISAAR_BASE}${identifier}/`);
  };
}

const isaar = new Isaar();
export default isaar;

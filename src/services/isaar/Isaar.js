import axios from 'axios';
import {ISAAR_BASE} from '../../config/config-api';

class Isaar {
  list = (params, cancelToken) => {
    return axios.get(ISAAR_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${ISAAR_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${ISAAR_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${ISAAR_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${ISAAR_BASE}${identifier}/`);
  };
}

const isaar = new Isaar();
export default isaar;
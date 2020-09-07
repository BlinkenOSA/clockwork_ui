import API from '../api.js';
import {CORPORATION_BASE, CORPORATION_SELECT} from "../../config/config-api";

class Corporation {
  select = (params) => {
    return API.get(CORPORATION_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(CORPORATION_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${CORPORATION_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${CORPORATION_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${CORPORATION_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${CORPORATION_BASE}${identifier}/`);
  };
}


const corporation = new Corporation();
export default corporation;

import API from '../api.js';
import {PRIMARY_TYPE_BASE, PRIMARY_TYPE_SELECT} from "../../config/config-api";

class PrimaryType {
  select = (params) => {
    return API.get(PRIMARY_TYPE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(PRIMARY_TYPE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${PRIMARY_TYPE_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${PRIMARY_TYPE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${PRIMARY_TYPE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${PRIMARY_TYPE_BASE}${identifier}/`);
  }
}

const primary_type = new PrimaryType();
export default primary_type;

import axios from 'axios';
import {PRIMARY_TYPE_BASE, PRIMARY_TYPE_SELECT} from "../../config/config-api";

class PrimaryType {
  select = (params) => {
    return axios.get(PRIMARY_TYPE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(PRIMARY_TYPE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${PRIMARY_TYPE_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${PRIMARY_TYPE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${PRIMARY_TYPE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${PRIMARY_TYPE_BASE}${identifier}/`);
  }
}

const primary_type = new PrimaryType();
export default primary_type;
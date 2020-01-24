import axios from 'axios';
import {EXTENT_UNIT_SELECT} from "../../config/config-api";
import {EXTENT_UNIT_BASE} from "../../config/config-api";

class ExtentUnit {
  select = (params) => {
    return axios.get(EXTENT_UNIT_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(EXTENT_UNIT_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${EXTENT_UNIT_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${EXTENT_UNIT_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${EXTENT_UNIT_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${EXTENT_UNIT_BASE}${identifier}/`);
  }
}

const extent_unit = new ExtentUnit();
export default extent_unit;
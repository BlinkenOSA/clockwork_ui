import API from '../api.js';
import {EXTENT_UNIT_SELECT} from "../../config/config-api";
import {EXTENT_UNIT_BASE} from "../../config/config-api";

class ExtentUnit {
  select = (params) => {
    return API.get(EXTENT_UNIT_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(EXTENT_UNIT_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${EXTENT_UNIT_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${EXTENT_UNIT_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${EXTENT_UNIT_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${EXTENT_UNIT_BASE}${identifier}/`);
  }
}

const extent_unit = new ExtentUnit();
export default extent_unit;

import API from '../api.js';
import {} from "../../config/config-api";
import {DATE_TYPE_BASE} from "../../config/config-api";
import {DATE_TYPE_SELECT} from "../../config/config-api";

class DateType {
  select = (params) => {
    return API.get(DATE_TYPE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(DATE_TYPE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${DATE_TYPE_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${DATE_TYPE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${DATE_TYPE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${DATE_TYPE_BASE}${identifier}/`);
  }
}

const date_type = new DateType();
export default date_type;

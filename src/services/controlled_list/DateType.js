import axios from 'axios';
import {} from "../../config/config-api";
import {DATE_TYPE_BASE} from "../../config/config-api";
import {DATE_TYPE_SELECT} from "../../config/config-api";

class DateType {
  select = (params) => {
    return axios.get(DATE_TYPE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(DATE_TYPE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${DATE_TYPE_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${DATE_TYPE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${DATE_TYPE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${DATE_TYPE_BASE}${identifier}/`);
  }
}

const date_type = new DateType();
export default date_type;
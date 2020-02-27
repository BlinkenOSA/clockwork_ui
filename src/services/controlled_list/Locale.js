import axios from 'axios';
import {LOCALE_BASE, LOCALE_SELECT} from "../../config/config-api";

class Locale {
  select = (params) => {
    return axios.get(LOCALE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(LOCALE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${LOCALE_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${LOCALE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${LOCALE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${LOCALE_BASE}${identifier}/`);
  }
}

const locale = new Locale();
export default locale;
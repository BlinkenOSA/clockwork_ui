import API from '../api.js';
import {LOCALE_BASE, LOCALE_SELECT} from "../../config/config-api";

class Locale {
  select = (params) => {
    return API.get(LOCALE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(LOCALE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${LOCALE_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${LOCALE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${LOCALE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${LOCALE_BASE}${identifier}/`);
  }
}

const locale = new Locale();
export default locale;

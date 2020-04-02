import API from '../api.js';
import {LANGUAGE_BASE, LANGUAGE_SELECT} from "../../config/config-api";

class Language {
  select = (params) => {
    return API.get(LANGUAGE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(LANGUAGE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${LANGUAGE_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${LANGUAGE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${LANGUAGE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${LANGUAGE_BASE}${identifier}/`);
  }
}

const language = new Language();
export default language;

import API from '../api.js';
import {LANGUAGE_USAGE_BASE, LANGUAGE_USAGE_SELECT} from "../../config/config-api";

class LanguageUsage {
  select = (params) => {
    return API.get(LANGUAGE_USAGE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(LANGUAGE_USAGE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${LANGUAGE_USAGE_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${LANGUAGE_USAGE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${LANGUAGE_USAGE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${LANGUAGE_USAGE_BASE}${identifier}/`);
  }
}

const language_usage = new LanguageUsage();
export default language_usage;

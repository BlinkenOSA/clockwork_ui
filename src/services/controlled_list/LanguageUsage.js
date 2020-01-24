import axios from 'axios';
import {LANGUAGE_USAGE_BASE, LANGUAGE_USAGE_SELECT} from "../../config/config-api";

class LanguageUsage {
  select = (params) => {
    return axios.get(LANGUAGE_USAGE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(LANGUAGE_USAGE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${LANGUAGE_USAGE_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${LANGUAGE_USAGE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${LANGUAGE_USAGE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${LANGUAGE_USAGE_BASE}${identifier}/`);
  }
}

const language_usage = new LanguageUsage();
export default language_usage;
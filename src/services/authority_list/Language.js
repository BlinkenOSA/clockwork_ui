import axios from 'axios';
import {LANGUAGE_BASE, LANGUAGE_SELECT} from "../../config/config-api";

class Language {
  select = (params) => {
    return axios.get(LANGUAGE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(LANGUAGE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${LANGUAGE_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${LANGUAGE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${LANGUAGE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${LANGUAGE_BASE}${identifier}/`);
  }
}

const language = new Language();
export default language;
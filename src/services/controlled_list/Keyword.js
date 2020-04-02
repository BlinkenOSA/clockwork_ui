import API from '../api.js';
import {KEYWORD_BASE, KEYWORD_SELECT} from "../../config/config-api";

class Keyword {
  select = (params) => {
    return API.get(KEYWORD_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(KEYWORD_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${KEYWORD_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${KEYWORD_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${KEYWORD_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${KEYWORD_BASE}${identifier}/`);
  }
}

const keyword = new Keyword();
export default keyword;

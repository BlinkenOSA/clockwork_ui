import axios from 'axios';
import {KEYWORD_BASE, KEYWORD_SELECT} from "../../config/config-api";

class Keyword {
  select = (params) => {
    return axios.get(KEYWORD_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(KEYWORD_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${KEYWORD_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${KEYWORD_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${KEYWORD_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${KEYWORD_BASE}${identifier}/`);
  }
}

const keyword = new Keyword();
export default keyword;
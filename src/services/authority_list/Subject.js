import API from '../api.js';
import {SUBJECT_BASE, SUBJECT_SELECT} from "../../config/config-api";

class Subject {
  select = (params) => {
    return API.get(SUBJECT_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(SUBJECT_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${SUBJECT_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${SUBJECT_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${SUBJECT_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${SUBJECT_BASE}${identifier}/`);
  };
}

const subject = new Subject();
export default subject;

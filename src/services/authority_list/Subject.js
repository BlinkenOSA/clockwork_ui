import axios from 'axios';
import {SUBJECT_BASE, SUBJECT_SELECT} from "../../config/config-api";

class Subject {
  select = (params) => {
    return axios.get(SUBJECT_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(SUBJECT_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${SUBJECT_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${SUBJECT_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${SUBJECT_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${SUBJECT_BASE}${identifier}/`);
  };
}

const subject = new Subject();
export default subject;
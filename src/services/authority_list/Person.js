import axios from 'axios';
import {
  PERSON_BASE,
  PERSON_SELECT
} from "../../config/config-api";

class Person {
  select = (params) => {
    return axios.get(PERSON_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(PERSON_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${PERSON_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${PERSON_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${PERSON_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${PERSON_BASE}${identifier}/`);
  };
}

const person = new Person();
export default person;
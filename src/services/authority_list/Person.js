import API from '../api.js';
import {
  PERSON_BASE,
  PERSON_SELECT
} from "../../config/config-api";

class Person {
  select = (params) => {
    return API.get(PERSON_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(PERSON_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${PERSON_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${PERSON_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${PERSON_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${PERSON_BASE}${identifier}/`);
  };
}

const person = new Person();
export default person;

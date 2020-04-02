import API from '../api.js';
import {PERSON_ROLE_SELECT} from "../../config/config-api";
import {PERSON_ROLE_BASE} from "../../config/config-api";

class PersonRole {
  select = (params) => {
    return API.get(PERSON_ROLE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(PERSON_ROLE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${PERSON_ROLE_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${PERSON_ROLE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${PERSON_ROLE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${PERSON_ROLE_BASE}${identifier}/`);
  }
}

const person_role = new PersonRole();
export default person_role;

import axios from 'axios';
import {PERSON_ROLE_SELECT} from "../../config/config-api";
import {PERSON_ROLE_BASE} from "../../config/config-api";

class PersonRole {
  select = (params) => {
    return axios.get(PERSON_ROLE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(PERSON_ROLE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${PERSON_ROLE_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${PERSON_ROLE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${PERSON_ROLE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${PERSON_ROLE_BASE}${identifier}/`);
  }
}

const person_role = new PersonRole();
export default person_role;
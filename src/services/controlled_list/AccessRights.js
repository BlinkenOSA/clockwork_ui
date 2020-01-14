import axios from 'axios';
import {ACCESS_RIGHTS_BASE} from "../../config/config-api";

class AccessRights {
  list = (params) => {
    return axios.get(ACCESS_RIGHTS_BASE, {params: params});
  };

  create = (formValues) => {
    return axios.post(`${ACCESS_RIGHTS_BASE}`, formValues);
  };

  update = (identifier, formValues) => {
    return axios.put(`${ACCESS_RIGHTS_BASE}${identifier}/`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${ACCESS_RIGHTS_BASE}${identifier}/`);
  };
}


const accessRights = new AccessRights();
export default accessRights;
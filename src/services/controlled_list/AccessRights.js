import axios from 'axios';
import {ACCESS_RIGHTS_BASE} from "../../config/config-api";

class AccessRights {
  list = (params, cancelToken) => {
    return axios.get(ACCESS_RIGHTS_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${ACCESS_RIGHTS_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${ACCESS_RIGHTS_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${ACCESS_RIGHTS_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${ACCESS_RIGHTS_BASE}${identifier}/`);
  }
}


const accessRights = new AccessRights();
export default accessRights;
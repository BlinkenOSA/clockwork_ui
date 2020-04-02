import API from '../api.js';
import {ACCESS_RIGHTS_BASE} from "../../config/config-api";

class AccessRights {
  list = (params, cancelToken) => {
    return API.get(ACCESS_RIGHTS_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${ACCESS_RIGHTS_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${ACCESS_RIGHTS_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${ACCESS_RIGHTS_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${ACCESS_RIGHTS_BASE}${identifier}/`);
  }
}


const accessRights = new AccessRights();
export default accessRights;

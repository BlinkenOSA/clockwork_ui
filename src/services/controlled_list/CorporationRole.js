import API from '../api.js';
import {} from "../../config/config-api";
import {CORPORATION_ROLE_BASE, CORPORATION_ROLE_SELECT} from "../../config/config-api";

class CorporationRole {
  select = (params) => {
    return API.get(CORPORATION_ROLE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(CORPORATION_ROLE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${CORPORATION_ROLE_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${CORPORATION_ROLE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${CORPORATION_ROLE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${CORPORATION_ROLE_BASE}${identifier}/`);
  }
}

const corporation_role = new CorporationRole();
export default corporation_role;

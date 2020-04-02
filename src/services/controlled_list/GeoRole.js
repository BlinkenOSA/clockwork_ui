import API from '../api.js';
import {GEO_ROLE_BASE, GEO_ROLE_SELECT} from "../../config/config-api";

class GeoRole {
  select = (params) => {
    return API.get(GEO_ROLE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(GEO_ROLE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${GEO_ROLE_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${GEO_ROLE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${GEO_ROLE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${GEO_ROLE_BASE}${identifier}/`);
  }
}

const geo_role = new GeoRole();
export default geo_role;

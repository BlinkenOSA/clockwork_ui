import axios from 'axios';
import {GEO_ROLE_BASE, GEO_ROLE_SELECT} from "../../config/config-api";

class GeoRole {
  select = (params) => {
    return axios.get(GEO_ROLE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(GEO_ROLE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${GEO_ROLE_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${GEO_ROLE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${GEO_ROLE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${GEO_ROLE_BASE}${identifier}/`);
  }
}

const geo_role = new GeoRole();
export default geo_role;
import API from '../api.js';
import {BUILDING_BASE, BUILDING_SELECT} from "../../config/config-api";

class Building {
  select = (params) => {
    return API.get(BUILDING_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(BUILDING_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${BUILDING_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${BUILDING_BASE}${identifier}/`, );
  };

  update = (identifier, formValues) => {
    return API.put(`${BUILDING_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${BUILDING_BASE}${identifier}/`);
  }
}

const building = new Building();
export default building;

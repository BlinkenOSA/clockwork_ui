import axios from 'axios';
import {BUILDING_BASE, BUILDING_SELECT} from "../../config/config-api";

class Building {
  select = (params) => {
    return axios.get(BUILDING_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(BUILDING_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${BUILDING_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${BUILDING_BASE}${identifier}/`, );
  };

  update = (identifier, formValues) => {
    return axios.put(`${BUILDING_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${BUILDING_BASE}${identifier}/`);
  }
}

const building = new Building();
export default building;
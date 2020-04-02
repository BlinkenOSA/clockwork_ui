import API from '../api.js';
import {PLACE_BASE, PLACE_SELECT} from "../../config/config-api";

class Place {
  select = (params) => {
    return API.get(PLACE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(PLACE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${PLACE_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${PLACE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${PLACE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${PLACE_BASE}${identifier}/`);
  };
}

const place = new Place();
export default place;

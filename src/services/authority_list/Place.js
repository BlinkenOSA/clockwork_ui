import axios from 'axios';
import {PLACE_BASE, PLACE_SELECT} from "../../config/config-api";

class Place {
  select = (params) => {
    return axios.get(PLACE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(PLACE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${PLACE_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${PLACE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${PLACE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${PLACE_BASE}${identifier}/`);
  };
}

const place = new Place();
export default place;
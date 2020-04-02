import API from '../api.js';
import {COUNTRY_BASE, COUNTRY_SELECT} from "../../config/config-api";

class Country {
  select = (params) => {
    return API.get(COUNTRY_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(COUNTRY_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${COUNTRY_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${COUNTRY_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${COUNTRY_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${COUNTRY_BASE}${identifier}/`);
  };
}

const country = new Country();
export default country;

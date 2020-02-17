import axios from 'axios';
import {COUNTRY_BASE, COUNTRY_SELECT} from "../../config/config-api";

class Country {
  select = (params) => {
    return axios.get(COUNTRY_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(COUNTRY_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${COUNTRY_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${COUNTRY_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${COUNTRY_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${COUNTRY_BASE}${identifier}/`);
  };
}

const country = new Country();
export default country;
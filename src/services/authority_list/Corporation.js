import axios from 'axios';
import {CORPORATION_BASE} from "../../config/config-api";

class Corporation {
  list = (params, cancelToken) => {
    return axios.get(CORPORATION_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${CORPORATION_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${CORPORATION_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${CORPORATION_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${CORPORATION_BASE}${identifier}/`);
  };
}


const corporation = new Corporation();
export default corporation;
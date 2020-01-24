import axios from 'axios';
import {} from "../../config/config-api";
import {CARRIER_TYPE_BASE, CARRIER_TYPE_SELECT} from "../../config/config-api";

class CarrierType {
  select = (params) => {
    return axios.get(CARRIER_TYPE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(CARRIER_TYPE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${CARRIER_TYPE_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${CARRIER_TYPE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${CARRIER_TYPE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${CARRIER_TYPE_BASE}${identifier}/`);
  }
}

const carrier_type = new CarrierType();
export default carrier_type;
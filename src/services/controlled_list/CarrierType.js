import API from '../api.js';
import {} from "../../config/config-api";
import {CARRIER_TYPE_BASE, CARRIER_TYPE_SELECT} from "../../config/config-api";

class CarrierType {
  select = (params) => {
    return API.get(CARRIER_TYPE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(CARRIER_TYPE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${CARRIER_TYPE_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${CARRIER_TYPE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${CARRIER_TYPE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${CARRIER_TYPE_BASE}${identifier}/`);
  }
}

const carrier_type = new CarrierType();
export default carrier_type;

import API from '../api.js';
import {DONOR_BASE, DONOR_SELECT} from '../../config/config-api';

class Donor {
  list = (params, cancelToken) => {
    return API.get(DONOR_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${DONOR_BASE}`, formValues);
  };

  update = (identifier, formValues) => {
    return API.put(`${DONOR_BASE}${identifier}/`, formValues);
  };

  read = (identifier) => {
    return API.get(`${DONOR_BASE}${identifier}/`);
  };

  select = (params) => {
    return API.get(DONOR_SELECT, {params: params});
  }
}

const donor = new Donor();
export default donor;

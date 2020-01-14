import axios from 'axios';
import {DONOR_BASE, DONOR_SELECT} from '../../config/config-api';

class Donor {
  list = (params) => {
    return axios.get(DONOR_BASE, {params: params});
  };

  create = (formValues) => {
    return axios.post(`${DONOR_BASE}`, formValues);
  };

  update = (identifier, formValues) => {
    return axios.put(`${DONOR_BASE}${identifier}/`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${DONOR_BASE}${identifier}/`);
  };

  select = (params) => {
    return axios.get(DONOR_SELECT, {params: params});
  }
}

const donor = new Donor();
export default donor;
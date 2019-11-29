import axios from 'axios';
import {DONOR_BASE, DONOR_SELECT} from '../config/config-api';

class Donor {
  list = (params) => {
    return axios.get(DONOR_BASE, {params: params});
  };

  read = (identifier) => {
    return axios.get(`${DONOR_BASE}${identifier}`);
  };

  select = (params) => {
    return axios.get(DONOR_SELECT, {params: params});
  }
}

const donor = new Donor();
export default donor;
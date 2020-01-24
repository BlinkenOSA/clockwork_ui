import axios from 'axios';
import {
  RESTRICTION_REASON_BASE, RESTRICTION_REASON_SELECT
} from "../../config/config-api";

class RestrictionReason {
  select = (params) => {
    return axios.get(RESTRICTION_REASON_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(RESTRICTION_REASON_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${RESTRICTION_REASON_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${RESTRICTION_REASON_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${RESTRICTION_REASON_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${RESTRICTION_REASON_BASE}${identifier}/`);
  }
}

const restriction_reason = new RestrictionReason();
export default restriction_reason;
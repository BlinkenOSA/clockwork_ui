import API from '../api.js';
import {
  RESTRICTION_REASON_BASE, RESTRICTION_REASON_SELECT
} from "../../config/config-api";

class RestrictionReason {
  select = (params) => {
    return API.get(RESTRICTION_REASON_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(RESTRICTION_REASON_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${RESTRICTION_REASON_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${RESTRICTION_REASON_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${RESTRICTION_REASON_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${RESTRICTION_REASON_BASE}${identifier}/`);
  }
}

const restriction_reason = new RestrictionReason();
export default restriction_reason;

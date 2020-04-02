import API from '../api.js';
import {
  REPRODUCTION_RIGHTS_BASE,
  REPRODUCTION_RIGHTS_SELECT
} from "../../config/config-api";

class ReproductionRights {
  select = (params) => {
    return API.get(REPRODUCTION_RIGHTS_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(REPRODUCTION_RIGHTS_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${REPRODUCTION_RIGHTS_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${REPRODUCTION_RIGHTS_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${REPRODUCTION_RIGHTS_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${REPRODUCTION_RIGHTS_BASE}${identifier}/`);
  }
}

const reproduction_rights = new ReproductionRights();
export default reproduction_rights;

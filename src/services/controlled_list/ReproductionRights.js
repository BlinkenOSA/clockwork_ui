import axios from 'axios';
import {
  REPRODUCTION_RIGHTS_BASE,
  REPRODUCTION_RIGHTS_SELECT
} from "../../config/config-api";

class ReproductionRights {
  select = (params) => {
    return axios.get(REPRODUCTION_RIGHTS_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(REPRODUCTION_RIGHTS_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${REPRODUCTION_RIGHTS_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${REPRODUCTION_RIGHTS_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${REPRODUCTION_RIGHTS_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${REPRODUCTION_RIGHTS_BASE}${identifier}/`);
  }
}

const reproduction_rights = new ReproductionRights();
export default reproduction_rights;
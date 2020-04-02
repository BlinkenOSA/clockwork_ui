import API from '../api.js';
import {ARCHIVAL_UNIT_THEME_BASE, ARCHIVAL_UNIT_THEME_SELECT} from "../../config/config-api";

class ArchivalUnitTheme {
  select = (params) => {
    return API.get(ARCHIVAL_UNIT_THEME_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(ARCHIVAL_UNIT_THEME_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${ARCHIVAL_UNIT_THEME_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${ARCHIVAL_UNIT_THEME_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${ARCHIVAL_UNIT_THEME_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${ARCHIVAL_UNIT_THEME_BASE}${identifier}/`);
  }
}

const archivalUnitTheme = new ArchivalUnitTheme();
export default archivalUnitTheme;

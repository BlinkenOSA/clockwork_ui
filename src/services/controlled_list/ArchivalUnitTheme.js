import axios from 'axios';
import {ARCHIVAL_UNIT_THEME_BASE, ARCHIVAL_UNIT_THEME_SELECT} from "../../config/config-api";

class ArchivalUnitTheme {
  select = (params) => {
    return axios.get(ARCHIVAL_UNIT_THEME_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(ARCHIVAL_UNIT_THEME_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${ARCHIVAL_UNIT_THEME_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${ARCHIVAL_UNIT_THEME_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${ARCHIVAL_UNIT_THEME_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${ARCHIVAL_UNIT_THEME_BASE}${identifier}/`);
  }
}

const archivalUnitTheme = new ArchivalUnitTheme();
export default archivalUnitTheme;
import API from '../api.js';
import {GENRE_BASE, GENRE_SELECT} from "../../config/config-api";

class Genre {
  select = (params) => {
    return API.get(GENRE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return API.get(GENRE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${GENRE_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${GENRE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${GENRE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${GENRE_BASE}${identifier}/`);
  };
}

const genre = new Genre();
export default genre;

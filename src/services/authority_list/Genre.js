import axios from 'axios';
import {GENRE_BASE, GENRE_SELECT} from "../../config/config-api";

class Genre {
  select = (params) => {
    return axios.get(GENRE_SELECT, {params: params});
  };

  list = (params, cancelToken) => {
    return axios.get(GENRE_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return axios.post(`${GENRE_BASE}`, formValues);
  };

  read = (identifier) => {
    return axios.get(`${GENRE_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return axios.put(`${GENRE_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return axios.delete(`${GENRE_BASE}${identifier}/`);
  };
}

const genre = new Genre();
export default genre;
import API from '../api.js';
import {LCSH_BASE, VIAF_BASE, WIKIPEDIA_BASE} from "../../config/config-api";

class AuthorityList {
  wikipedia = (query, cancelToken) => {
    return API.get(WIKIPEDIA_BASE, {params: {query: query}, cancelToken: cancelToken});
  };

  viaf = (query, type, cancelToken) => {
    return API.get(VIAF_BASE, {params: {query: query, type: type}, cancelToken: cancelToken});
  };

  lcsh = (query, type, cancelToken) => {
    return API.get(LCSH_BASE, {params: {query: query, type: type}, cancelToken: cancelToken});
  };
}


const authorityList = new AuthorityList();
export default authorityList;

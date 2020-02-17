import axios from 'axios';
import {LCSH_BASE, VIAF_BASE, WIKIPEDIA_BASE} from "../../config/config-api";

class AuthorityList {
  wikipedia = (query, cancelToken) => {
    return axios.get(WIKIPEDIA_BASE, {params: {query: query}, cancelToken: cancelToken});
  };

  viaf = (query, type, cancelToken) => {
    return axios.get(VIAF_BASE, {params: {query: query, type: type}, cancelToken: cancelToken});
  };

  lcsh = (query, type, cancelToken) => {
    return axios.get(LCSH_BASE, {params: {query: query, type: type}, cancelToken: cancelToken});
  };
}


const authorityList = new AuthorityList();
export default authorityList;
import axios from 'axios';
import {COUNTRY_SELECT} from "../config/config-api";

class AuthorityList {
  selectCountry = (params) => {
    return axios.get(COUNTRY_SELECT, {params: params});
  };
}


const authortyList = new AuthorityList();
export default authortyList;
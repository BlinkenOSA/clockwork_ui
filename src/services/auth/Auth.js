import API from '../api.js';
import {ACTIVE_USER, CHANGE_PASSWORD, CREATE_TOKEN} from "../../config/config-api";

class Auth {
  getToken = (formValues) => {
    return API.post(CREATE_TOKEN, formValues);
  };

  getUser = () => {
    return API.get(ACTIVE_USER);
  };

  updateUser = (formValues) => {
    return API.put(ACTIVE_USER, formValues);
  };

  updatePassword = (formValues) => {
    return API.post(CHANGE_PASSWORD, formValues)
  };
}

const auth = new Auth();
export default auth;

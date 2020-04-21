import axios from 'axios';
import {useAuthTokenInterceptor} from 'axios-jwt';
import {REFRESH_TOKEN} from "../config/config-api";

const baseURL = process.env.REACT_APP_BACKEND_API;

const api = axios.create({
  baseURL: baseURL
});

api.CancelToken = axios.CancelToken;
api.isCancel = axios.isCancel;

const requestRefresh = (refresh) => {
  return new Promise((resolve, reject) => {
    axios.post( `${baseURL}${REFRESH_TOKEN}`, {
      refresh
    }).then(response => {
      resolve(response.data.access);
    }, reject);
  });
};
useAuthTokenInterceptor(api, { requestRefresh });

export default api;

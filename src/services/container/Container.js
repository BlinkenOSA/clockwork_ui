import API from '../api.js';
import {
  CONTAINER_BASE, CONTAINER_CREATE, CONTAINER_PRE_CREATE
} from '../../config/config-api';

class Container {
  list = (params, cancelToken) => {
    return API.get(CONTAINER_BASE, {params: params, cancelToken: cancelToken});
  };

  read = (identifier) => {
    return API.get(`${CONTAINER_BASE}${identifier}/`);
  };

  preCreate = (identifier) => {
    return API.get(`${CONTAINER_PRE_CREATE}${identifier}/`);
  };

  create = (formValues) => {
    return API.post(CONTAINER_CREATE, formValues);
  };

  update = (identifier, formValues) => {
    return API.put(`${CONTAINER_BASE}${identifier}/`, formValues);
  };

  fieldUpdate = (identifier, formValues) => {
    return API.patch(`${CONTAINER_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${CONTAINER_BASE}${identifier}/`);
  };

  publish = (identifier) => {
    return API.put(`${CONTAINER_BASE}publish/${identifier}/`);
  };

  unpublish = (identifier) => {
    return API.put(`${CONTAINER_BASE}unpublish/${identifier}/`);
  };
}

const container = new Container();
export default container;

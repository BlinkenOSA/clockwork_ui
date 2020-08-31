import API from '../api.js';
import {
  DONOR_BASE,
  FINDING_AIDS_BASE, FINDING_AIDS_CLONE
} from '../../config/config-api';

class FindingAids {
  list = (params, cancelToken) => {
    return API.get(FINDING_AIDS_BASE, {params: params, cancelToken: cancelToken});
  };

  create = (formValues) => {
    return API.post(`${FINDING_AIDS_BASE}`, formValues);
  };

  read = (identifier) => {
    return API.get(`${FINDING_AIDS_BASE}${identifier}/`);
  };

  update = (identifier, formValues) => {
    return API.put(`${FINDING_AIDS_BASE}${identifier}/`, formValues);
  };

  delete = (identifier) => {
    return API.delete(`${FINDING_AIDS_BASE}${identifier}/`);
  };

  publish = (identifier) => {
    return API.put(`${FINDING_AIDS_BASE}publish/${identifier}/`);
  };

  unpublish = (identifier) => {
    return API.put(`${FINDING_AIDS_BASE}unpublish/${identifier}/`);
  };

  setConfidential = (identifier) => {
    return API.put(`${FINDING_AIDS_BASE}set_confidential/${identifier}/`);
  };

  setNonConfidential = (identifier) => {
    return API.put(`${FINDING_AIDS_BASE}set_non_confidential/${identifier}/`);
  };

  clone = (identifier, cancelToken) => {
    return API.post(`${FINDING_AIDS_CLONE}${identifier}/`, {}, {cancelToken: cancelToken});
  }
}

const finding_aids = new FindingAids();
export default finding_aids;

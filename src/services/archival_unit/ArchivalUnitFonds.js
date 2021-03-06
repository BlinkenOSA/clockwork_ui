import API from '../api.js';
import {ARCHIVAL_UNIT_BASE, ARCHIVAL_UNIT_SELECT} from '../../config/config-api';

class ArchivalUnitFonds {
  list = (params, cancelToken) => {
    return API.get(ARCHIVAL_UNIT_BASE, {params: params, cancelToken: cancelToken});
  };

  selectFonds = (params) => {
    params ? params['level'] = 'F' : params = {level: 'F'};
    return API.get(ARCHIVAL_UNIT_SELECT, {params: params});
  };
}

const archival_unit_fonds = new ArchivalUnitFonds();
export default archival_unit_fonds;

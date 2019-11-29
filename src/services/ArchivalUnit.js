import axios from 'axios';
import {ARCHIVAL_UNIT_SELECT} from '../config/config-api';

class ArchivalUnit {
  selectFonds = (params) => {
    params ? params['level'] = 'F' : params = {level: 'F'};
    return axios.get(ARCHIVAL_UNIT_SELECT, {params: params});
  };
}

const archival_unit = new ArchivalUnit();
export default archival_unit;
import API from '../api.js';
import {
  FINDING_AIDS_BASE
} from '../../config/config-api';

class FindingAids {
  list = (params, cancelToken) => {
    return API.get(FINDING_AIDS_BASE, {params: params, cancelToken: cancelToken});
  };

}

const finding_aids = new FindingAids();
export default finding_aids;

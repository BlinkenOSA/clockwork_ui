import axios from 'axios';
import {BUILDING_SELECT} from "../config/config-api";

class ControlledList {
  selectBuilding = (params) => {
    return axios.get(BUILDING_SELECT, {params: params});
  };
}


const controlledList = new ControlledList();
export default controlledList;
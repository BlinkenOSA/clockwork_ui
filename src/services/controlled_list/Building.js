import axios from 'axios';
import {BUILDING_SELECT} from "../../config/config-api";

class Building {
  select = (params) => {
    return axios.get(BUILDING_SELECT, {params: params});
  };
}


const building = new Building();
export default building;
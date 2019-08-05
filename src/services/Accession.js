import axios from 'axios';
import {ACCESSION_BASE} from '../config/config-api';

class Accession {
  list = (params) => {
    return axios.get(ACCESSION_BASE, {params: params});
  };
}

const accession = new Accession();
export default accession;
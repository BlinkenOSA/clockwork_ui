import axios from 'axios';
import {ACCESSION_BASE} from '../config/config-api';

class Accession {
  list = () => {
    return axios.get(ACCESSION_BASE);
  };
}

const accession = new Accession();
export default accession;
import {SET_TABLE_ID} from "../../../store/actionTypes";

export default function setTableID(identifier, tableName) {
  return {
    type: SET_TABLE_ID,
    payload: {
      tableName: tableName,
      id: identifier
    }
  }
}

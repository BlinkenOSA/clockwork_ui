import {SET_TABLE_FILTER} from "../../../store/actionTypes";

export default function setTableFilter(filter, tableName) {
  return {
    type: SET_TABLE_FILTER,
    payload: {
      tableName: tableName,
      filter: filter
    }
  }
}
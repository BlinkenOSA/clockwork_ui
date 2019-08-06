import {SET_TABLE_SORTER} from "../../../store/actionTypes";

export default function setTableSorter(sorter, tableName) {
  return {
    type: SET_TABLE_SORTER,
    payload: {
      tableName: tableName,
      sorter: sorter
    }
  }
}
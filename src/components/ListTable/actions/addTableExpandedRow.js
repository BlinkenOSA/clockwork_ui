import {ADD_TABLE_EXPANDED_ROW} from "../../../store/actionTypes";

export default function setTableExpandedRow(expandedRowKey, tableName) {
  return {
    type: ADD_TABLE_EXPANDED_ROW,
    payload: {
      tableName: tableName,
      expandedRowKey: expandedRowKey
    }
  }
}
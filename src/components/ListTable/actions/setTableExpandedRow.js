import {SET_TABLE_EXPANDED_ROW} from "../../../store/actionTypes";

export default function setTableExpandedRow(expandedRowKeys, tableName) {
  return {
    type: SET_TABLE_EXPANDED_ROW,
    payload: {
      tableName: tableName,
      expandedRowKeys: expandedRowKeys
    }
  }
}
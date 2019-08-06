import { SET_TABLE_TOTAL } from "../../../store/actionTypes";

export default function setTableTotal(total, tableName) {
  return {
    type: SET_TABLE_TOTAL,
    payload: {
      tableName: tableName,
      total: total
    }
  }
}
import { combineReducers } from "redux";
import tableReducer from '../components/ListTable/reducer/tableReducer'

const reducer = combineReducers(
  {
    tableSettings: tableReducer
  }
);

export default reducer;
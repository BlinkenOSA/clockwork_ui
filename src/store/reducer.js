import { combineReducers } from "redux";
import tableReducer from '../components/ListTable/reducer/tableReducer'
import userReducer from "../components/User/UserAvatar/reducer/userReducer";

const reducer = combineReducers(
  {
    tableSettings: tableReducer,
    user: userReducer
  }
);

export default reducer;

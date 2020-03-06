import {
  ADD_TABLE_EXPANDED_ROW,
  SET_TABLE_EXPANDED_ROW,
  SET_TABLE_FILTER,
  SET_TABLE_PAGINATION,
  SET_TABLE_SORTER,
  SET_TABLE_TOTAL
} from "../../../store/actionTypes";

const initialState = {};

function tableReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TABLE_PAGINATION: {
      const newState = Object.assign({}, state[action.payload.tableName], {
        pagination: action.payload.pagination
      });
      return {
        ...state,
        [action.payload.tableName]: newState
      }
    }
    case SET_TABLE_FILTER: {
      const newState = Object.assign({}, state[action.payload.tableName], {
        filter: action.payload.filter
      });
      return {
        ...state,
        [action.payload.tableName]: newState
      }
    }
    case SET_TABLE_SORTER: {
      const newState = Object.assign({}, state[action.payload.tableName], {
        sorter: action.payload.sorter
      });
      return {
        ...state,
        [action.payload.tableName]: newState
      }
    }
    case ADD_TABLE_EXPANDED_ROW: {
      const newState = Object.assign({}, state[action.payload.tableName], {
        expandedRowKeys: [...state[action.payload.tableName]['expandedRowKeys'], action.payload.expandedRowKey]
      });
      return {
        ...state,
        [action.payload.tableName]: newState
      }
    }
    case SET_TABLE_EXPANDED_ROW: {
      const newState = Object.assign({}, state[action.payload.tableName], {
        expandedRowKeys: action.payload.expandedRowKeys
      });
      return {
        ...state,
        [action.payload.tableName]: newState
      }
    }
    case SET_TABLE_TOTAL: {
      const newState = Object.assign({}, state[action.payload.tableName]['pagination'], {
        total: action.payload.total
      });
      return {
        ...state,
        [action.payload.tableName]: {
          ...state[action.payload.tableName],
          pagination: newState
        }
      }
    }
    default: {
      return { ...state };
    }
  }
}

export default tableReducer;
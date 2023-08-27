import {
  FETCH_TODO,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "../actionType/todoType";

const initialState = {
  dataList: [],
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO:
      return {
        ...state,
        dataList: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
      };
    case DELETE_TODO:
      return {
        ...state,
      };
    case EDIT_TODO:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default todoReducers;

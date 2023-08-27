import { FETCH_TODO } from "../actionType/todoType";

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
    default:
      return state;
  }
};

export default todoReducers;

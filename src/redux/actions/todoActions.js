import { FETCH_TODO } from "../actionType/todoType";
import axios from "../../APIs/todoApi";

const fetchTodo = () => async (dispatch) => {
  try {
    const response = await axios({
      method: "get",
      url: "/todo",
    });
    dispatch({
      type: FETCH_TODO,
      payload: response.response,
    });
  } catch (error) {
    console.log(error);
  }
};

const todoAction = {
  fetchTodo,
};

export default todoAction;

import { FETCH_TODO, ADD_TODO, DELETE_TODO } from "../actionType/todoType";
import axios from "../../APIs/todoApi";

const fetchTodo = () => async (dispatch) => {
  try {
    const response = await axios({
      method: "get",
      url: "/todo",
    });
    dispatch({
      type: FETCH_TODO,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const addTodo = (values) => async (dispatch) => {
  try {
    const insert = await axios({
      method: "post",
      url: "/todo",
      data: values,
    });
    dispatch({
      type: ADD_TODO,
      payload: insert.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = (id) => async (dispatch) => {
  try {
    console.log("id", id);
    const del = await axios({
      method: "delete",
      url: "/todo/" + id,
    });

    dispatch({
      type: DELETE_TODO,
      payload: del,
    });
  } catch (error) {
    console.log(error);
  }
};

const todoAction = {
  fetchTodo,
  addTodo,
  deleteTodo,
};

export default todoAction;

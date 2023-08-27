import {
  FETCH_TODO,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "../actionType/todoType";
import axios from "../../APIs/todoApi";

const fetchTodo = (status) => async (dispatch) => {
  try {
    const response = await axios({
      method: "get",
      url: `/todo?status=${status}`,
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

const editTodoStatus = (id, status) => async (dispatch) => {
  try {
    const update = await axios({
      method: "put",
      url: "/todo/" + id,
      data: {
        status: status,
      },
    });
    dispatch({
      type: EDIT_TODO,
      payload: update,
    });
  } catch (error) {
    console.log(error);
  }
};

const todoAction = {
  fetchTodo,
  addTodo,
  deleteTodo,
  editTodoStatus,
};

export default todoAction;

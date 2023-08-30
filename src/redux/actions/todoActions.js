import {
  FETCH_TODO,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO_ACTIVITY,
  EDIT_TODO_STATUS,
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
    window.location.reload(false);
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
    window.location.reload(false);
  } catch (error) {
    console.log(error);
  }
};

const editTodoActivity = (id, activity) => async (dispatch) => {
  try {
    const update = await axios({
      method: "put",
      url: "/todo/" + id,
      data: {
        activity: activity,
      },
    });
    dispatch({
      type: EDIT_TODO_ACTIVITY,
      payload: update,
    });
    window.location.reload(false);
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
      type: EDIT_TODO_STATUS,
      payload: update,
    });
    window.location.reload(false);
  } catch (error) {
    console.log(error);
  }
};

const todoAction = {
  fetchTodo,
  addTodo,
  deleteTodo,
  editTodoStatus,
  editTodoActivity,
};

export default todoAction;

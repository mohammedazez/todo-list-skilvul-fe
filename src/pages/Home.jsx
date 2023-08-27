import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import todoAction from "../redux/actions/todoActions";
import AddTodo from "../components/AddTodo";
import EditTodo from "../components/EditTodo";
import DeleteTodo from "../components/DeleteTodo";

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.dataList);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    dispatch(todoAction.fetchTodo(status));
  }, [dispatch, status]);

  const handleEdit = (id) => {
    dispatch(todoAction.editTodo(id));
    window.location.reload(false);
  };

  const handleDelete = (id) => {
    dispatch(todoAction.deleteTodo(id));
    window.location.reload(false);
  };

  return (
    <div
      className="h-screen overflow-hidden flex items-center justify-center"
      style={{ background: "#edf2f7" }}
    >
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <AddTodo />
          <div>
            <div className="my-5">
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 mr-5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => setStatus("")}
              >
                All
              </button>
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 mr-5  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => setStatus(1)}
              >
                Active
              </button>
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 mr-5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => setStatus(0)}
              >
                Completed
              </button>
            </div>

            {todos.response &&
              todos.response.map((item, index) => {
                return (
                  <div className="flex mb-4 items-center" key={index}>
                    <p className="w-full text-grey-darkest">{item.activity}</p>
                    <div onClick={() => handleEdit(item.id)}>
                      <EditTodo />
                    </div>
                    <div onClick={() => handleDelete(item.id)}>
                      <DeleteTodo />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

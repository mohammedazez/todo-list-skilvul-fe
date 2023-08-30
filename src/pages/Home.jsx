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
  const [edit, setEdit] = useState({
    id: null,
    activity: "",
  });

  useEffect(() => {
    dispatch(todoAction.fetchTodo(status));
  }, [dispatch, status]);

  const handleChangeActivity = () => {
    dispatch(todoAction.editTodoActivity(edit.id, edit.activity));
    setEdit({ id: null, activity: "" });
  };

  const handleChangeStatus = (id, status) => {
    dispatch(todoAction.editTodoStatus(id, status));
  };

  const handleDelete = (id) => {
    dispatch(todoAction.deleteTodo(id));
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
                    {edit.id === item.id ? (
                      <div className="flex items-center w-full">
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                          type="text"
                          value={edit.activity}
                          onChange={(e) =>
                            setEdit({ ...edit, activity: e.target.value })
                          }
                        />

                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={handleChangeActivity}
                        >
                          Update
                        </button>
                      </div>
                    ) : item.status ? (
                      <p
                        className="w-full text-grey-darkest"
                        onClick={() => handleChangeStatus(item.id, 0)}
                      >
                        {item.activity}
                      </p>
                    ) : (
                      <p
                        className="w-full line-through text-green"
                        onClick={() => handleChangeStatus(item.id, 1)}
                      >
                        {item.activity}
                      </p>
                    )}
                    <div
                      onClick={() =>
                        setEdit({
                          id: item.id,
                          activity: item.activity,
                          status: item.status,
                        })
                      }
                    >
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

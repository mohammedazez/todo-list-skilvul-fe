import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import todoAction from "../redux/actions/todoActions";
import AddTodo from "../components/AddTodo";
import EditTodo from "../components/EditTodo";
import DeleteTodo from "../components/DeleteTodo";

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.dataList);

  useEffect(() => {
    dispatch(todoAction.fetchTodo());
  }, [dispatch]);

  const handleClick = (id) => {
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
            {todos.response &&
              todos.response.map((item, index) => {
                return (
                  <div className="flex mb-4 items-center" key={index}>
                    <p className="w-full text-grey-darkest">{item.activity}</p>
                    <EditTodo />
                    <div onClick={() => handleClick(item.id)}>
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

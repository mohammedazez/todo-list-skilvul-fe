import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import todoAction from "../redux/actions/todoActions";

const Home = () => {
  const dispatch = useDispatch();

  const divStyle = {
    background: "#edf2f7",
  };

  const todos = useSelector((state) => state.todo.dataList);
  console.log("todos", todos.response);

  useEffect(() => {
    dispatch(todoAction.fetchTodo());
  }, [dispatch]);

  return (
    <div
      className="h-screen overflow-hidden flex items-center justify-center"
      style={divStyle}
    >
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest text-xl">
              What's the plan for today?
            </h1>
            <div className="flex mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
              />
              <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">
                Add
              </button>
            </div>
          </div>
          <div>
            {todos.response &&
              todos.response.map((item, index) => {
                return (
                  <div className="flex mb-4 items-center" key={index}>
                    <p className="w-full text-grey-darkest">{item.activity}</p>
                    <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
                      Done
                    </button>
                    <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                      Remove
                    </button>
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

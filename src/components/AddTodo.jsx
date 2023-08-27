import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todoAction from "../redux/actions/todoActions";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    activity: "",
    status: true,
  });

  const handleInput = (e) => {
    setInput({
      ...input,
      activity: e.target.value,
    });
  };

  const handleAddTodo = () => {
    if (input.activity) {
      dispatch(todoAction.addTodo(input));
      setInput({
        activity: "",
        status: true,
      });
      window.location.reload(false);
    }
  };

  return (
    <div className="mb-4">
      <h1 className="text-grey-darkest text-xl">What's the plan for today?</h1>
      <div className="flex mt-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Todo"
          value={input.activity}
          onChange={handleInput}
        />
        <button
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;

import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="w-full mb-4" onSubmit={handleSubmit}>
      <input
        className=" outline-none bg-none border-2 border-indigo-700 px-4 py-2 mt-2 mb-3 w-72"
        type="text"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button className="bg-indigo-700 text-white border-none px-3 py-2 cursor-pointer" type="submit">
        Add task
      </button>
    </form>
  );
};

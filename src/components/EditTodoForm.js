import React, { useState } from "react";

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        editTodo(value, task.id)
        setValue("")
    }
  return (
    <form className="w-full mb-4" onSubmit={handleSubmit}>
      <input className="outline-none bg-none border-2 border-indigo-700 px-1 py-1 mt-2 mb-1 w-72" type = "text" value = {value} 
      placeholder="Update Task" onChange= {(e)=>{ setValue(e.target.value)
      }}>
      </input>
      <button className="bg-indigo-700 text-white border-none px-1 py-1 cursor-pointer" type="submit">Update task</button>
    </form>
  );
};

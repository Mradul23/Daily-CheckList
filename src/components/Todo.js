import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, edittodo, deleteTodo }) => {
  return (
    <div className="flex justify-between items-center bg-indigo-700 text-white p-2 mb-4 rounded-md ">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "line-through text-indigo-900" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>{edittodo(task.id)}} />
        <FontAwesomeIcon icon={faTrash} className="ml-3" onClick={()=>{deleteTodo(task.id)}} />
      </div>
    </div>
  );
};

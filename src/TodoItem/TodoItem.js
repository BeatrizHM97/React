import React from "react";
import './TodoItem.css';

function TodoItem(props) {
  return (
    <div className="TodoItem">
      <p className={`${props.completed && 'task-completed'}`}><img src="./img/task.png" alt="task"/> {props.text}</p>
      <button><img src="./img/delete.png" alt="delete"/></button>
    </div>
  );
}
export { TodoItem };
import React from "react";
import './TodoItem.css';

function TodoItem(props) {
  const onComplete = () => {
    alert('Ya completaste la tarea ' + props.text);
  }
  const onDelete = () => {
    alert('Borraste la tarea ' + props.text);
  }

  return (
    <div className="TodoItem">
      <p className={`${props.completed && 'task-completed'}`}>
        <img onClick={onComplete} src="./img/task.png" alt="task"/> 
        {props.text}
      </p>
      <button onClick={onDelete}>
        <img src="./img/delete.png" alt="delete"/>
      </button>
    </div>
  );
}
export { TodoItem };
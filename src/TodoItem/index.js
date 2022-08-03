import './TodoItem.css';

function TodoItem(props) {
  return (
    <div className="TodoItem">
      <p className={`${props.completed && 'task-completed'}`}>
        <img onClick={props.onComplete} src="react-project/./img/task.png" alt="task"/> 
        {props.text}
      </p>
      <button onClick={props.onDelete}>
        <img src="react-project/./img/delete.png" alt="delete"/>
      </button>
    </div>
  );
}
export { TodoItem };
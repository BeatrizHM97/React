import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
  const {totalTodos, completedTodos} = useContext(TodoContext);
  return (
    <>
      <h2 className="TodoCounterTitle">Tus tareas</h2>
      <h5 className="TodoCounterSubtitle">Has completado {completedTodos} de {totalTodos}</h5>
    </>
  );
}

export { TodoCounter }; 
/* 
  Es mejor exportar de esta manera porque 
  asi usa el mismo nombre de la funcion y 
  no genera confuciones 
*/
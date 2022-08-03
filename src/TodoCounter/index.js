import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos}) {
  return (
    <>
      <h2 className="TodoCounterTitle">Tus tareas</h2>
      <h5 className="TodoCounterSubtitle">Has completado {completedTodos} de {totalTodos}</h5>
    </>
  );
}

export { TodoCounter }; 
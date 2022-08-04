import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos, loading}) {
  return (
    <>
      <h2 className={`TodoCounterTitle ${!!loading && "TodoCounter--disable"}`}>Tus tareas</h2>
      <h5 
        className={`TodoCounterSubtitle ${!!loading && "TodoCounter--disable"}`}
      >
        Has completado {completedTodos} de {totalTodos}
      </h5>
    </>
  );
}

export { TodoCounter }; 
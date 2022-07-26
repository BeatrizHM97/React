import React from "react";
import './TodoCounter.css';

function TodoCounter({total, completed}) {

  return (
    <>
      <h2 className="TodoCounterTitle">Tus tareas</h2>
      <h5 className="TodoCounterSubtitle">Has completado {completed} de {total}</h5>
    </>
  );
}

export { TodoCounter }; 
/* 
  Es mejor exportar de esta manera porque 
  asi usa el mismo nombre de la funcion y 
  no genera confuciones 
*/
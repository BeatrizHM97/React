import React from "react";
import './TodoCounter.css';

function TodoCounter() {
  return (
    <React.Fragment>
      <h2 className="TodoCounterTitle">Tus tareas</h2>
      <h5 className="TodoCounterSubtitle">Has completado 2 de 3 TODOs</h5>
    </React.Fragment>
  );
}

export { TodoCounter }; 
/* 
  Es mejor exportar de esta manera porque 
  asi usa el mismo nombre de la funcion y 
  no genera confuciones 
*/
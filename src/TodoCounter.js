import React from "react";

function TodoCounter() {
  return (
    <h2>Has completado 2 de 3 TODOs</h2>
  );
}

export { TodoCounter }; 
/* 
  Es mejor exportar de esta manera porque 
  asi usa el mismo nombre de la funcion y 
  no genera confuciones 
*/
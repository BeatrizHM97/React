import React from "react";
import './TodoSearch.css'

function TodoSearch() {
  return (
    <label className="TodoSearch">
      <img src="./img/search.png" alt="search"></img>
      <input placeholder="Buscar"/>
    </label>
  );
}

export { TodoSearch };
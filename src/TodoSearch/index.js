import React from "react";
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <label className="TodoSearch">
      <img src="./img/search.png" alt="search"></img>
      <input onChange={onSearchValueChange} value={searchValue} placeholder="Buscar"/>
    </label>
  );
}

export { TodoSearch };
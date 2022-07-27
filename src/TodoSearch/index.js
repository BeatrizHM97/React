import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch() {
  const {searchValue, setSearchValue} = useContext(TodoContext);

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
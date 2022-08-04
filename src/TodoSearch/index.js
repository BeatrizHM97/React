import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue, loading}) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <label className={`TodoSearch ${!!loading && "TodoDisable"}`}>
      <img src="react-project/./img/search.png" alt="search"></img>
      <input onChange={onSearchValueChange} value={searchValue} placeholder="Buscar" disabled={loading}/>
    </label>
  );
}

export { TodoSearch };
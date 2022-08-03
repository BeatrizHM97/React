import { useState, createContext } from "react";
import { useLocalStorage } from './useLocalStorage'; 

const TodoContext = createContext();

function TodoProvider(props) {
  const { 
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState('');
  const [callModal, setCallModal] = useState(false);

  let searchedTodos = [];

  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completedTodos = searchedTodos.filter(todo => !!todo.completed).length;
  const totalTodos =  searchedTodos.length;

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos: searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      callModal,
      setCallModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}


export { TodoContext, TodoProvider };
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoHeader } from '../TodoHeader';

function AppUI() {
  const {
    error, 
    loading, 
    serchedTodos, 
    completeTodo, 
    deleteTodo
  } = useContext(TodoContext);
  return (
    <div className="App">
      <TodoHeader/>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes</p>}
        {(!loading && !serchedTodos.length) && <p>Crea tu primer TODO!!</p>}
        {serchedTodos.map(todo => (
        <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
        ))}
      </TodoList>
    </div>
  );
}

export { AppUI };
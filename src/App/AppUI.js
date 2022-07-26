import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoHeader } from '../TodoHeader';

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  serchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <div className="App">
      <TodoHeader/>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
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
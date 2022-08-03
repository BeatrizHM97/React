import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoHeader } from '../TodoHeader';
import { TodoContainer } from '../TodoContainer';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch'
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const {
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    callModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue
  } = useContext(TodoContext);
  return (
    <div className="App">
      <TodoHeader/>
      <TodoContainer>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoContainer>
      
      <TodoList>        
        {searchedTodos.map(todo => (
        <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
        ))}
      </TodoList>
      {!!callModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </div>
  );
}

export { AppUI };
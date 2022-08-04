import { useTodos } from './useTodos';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoHeader } from '../TodoHeader';
import { TodoContainer } from '../TodoContainer';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch'
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosController } from '../TodosController';
import './App.css';

function App() {
  const {
    addTodo,
    totalTodos, 
    completedTodos, 
    searchValue, 
    setSearchValue, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    callModal,
    setCallModal,
    loading, 
    error
  } = useTodos();
  return (
    <div className="App">
      <TodoHeader
        setCallModal={setCallModal}
      />
      <TodoContainer loading={loading}>
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
        <TodosController
          loading={loading}
          error={error}
          totalTodos={totalTodos}
          searchValue={searchValue}
        />        
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
          <TodoForm 
            addTodo={addTodo}
            setCallModal={setCallModal}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
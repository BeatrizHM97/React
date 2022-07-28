import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoHeader } from '../TodoHeader';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const {
    serchedTodos, 
    completeTodo, 
    deleteTodo,
    callModal
  } = useContext(TodoContext);
  return (
    <div className="App">
      <TodoHeader/>
      <TodoCounter/>
      <TodoSearch/>
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
      {!!callModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </div>
  );
}

export { AppUI };
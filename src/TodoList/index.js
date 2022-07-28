import { TodosController } from '../TodosController';
import './TodoList.css';

function TodoList (props) {
  return (
    <section className="TodoList">
      <TodosController/>       
      {props.children}
    </section>
  );
}

export { TodoList };
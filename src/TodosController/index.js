import {TodoLoading} from './TodoLoading';
import { TodoEmpty } from './TodoEmpty';
import { TodoError } from "./TodoError";

function TodosController({loading, searchedTodos, error}) {

    return (
        <>
            {loading && <TodoLoading/>}
            {(!loading && !searchedTodos.length) && <TodoEmpty/>}
            {error && <TodoError/> }
        </>
    );
}

export { TodosController };
import {TodoLoading} from './TodoLoading';
import { TodoEmpty } from './TodoEmpty';
import { TodoError } from "./TodoError";
import { EmptySearch } from "./EmptySearch";

function TodosController({loading, error, totalTodos, searchValue}) {

    return (
        <>
            {loading && <TodoLoading/>}
            {(!loading && !totalTodos && !searchValue) && <TodoEmpty/>}
            {error && <TodoError/> }
            {(!loading && !totalTodos && searchValue) && <EmptySearch searchText={searchValue}/>}
        </>
    );
}

export { TodosController };
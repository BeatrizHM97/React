import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import {TodoLoading} from './TodoLoading';
import { TodoEmpty } from './TodoEmpty';
import { TodoError } from "./TodoError";

function TodosController() {
    const {loading, searchedTodos, error} = useContext(TodoContext);

    return (
        <>
            {loading && <TodoLoading/>}
            {(!loading && !searchedTodos.length) && <TodoEmpty/>}
            {error && <TodoError/> }
        </>
    );
}

export { TodosController };
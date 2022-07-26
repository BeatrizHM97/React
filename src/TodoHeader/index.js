import React from "react";
import './TodoHeader.css';
import { TodoButton } from '../TodoButton';

function TodoHeader() {
    return (
        <div className="TodoHeader">
            <h3>TODO Machine</h3>
            <TodoButton/>
        </div>
    );
}

export { TodoHeader };
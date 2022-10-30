import React from "react";
import Todo from "./Todo";

const TodoList = ( {todos} ) => {

    return (
        
        <div className="todo-container">
            <ul className="todo-list">
                <Todo todos = {todos}/>
            </ul>
        </div>
    )
}

export default TodoList;
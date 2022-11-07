import React from "react";
import Todo from "./Todo";

const TodoList = ( {todos, setTodos} ) => {

    //only render todos that match completed state of list view

    return (
        
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo key = {todo.id} text = {todo.text} setTodos={setTodos} todos={todos} todo={todo}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList; 
import React from "react";
import Todo from "./Todo";

const TodoList = ( {todos, setTodos} ) => {

    const [listView, setListView] = useState("All");

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
import React from "react";
import Todo from "./Todo";

const TodoList = ( {todos, setTodos, listView} ) => {

    //only render todos that match completed state of list view

    const filteredTodos = todos;
    switch(listView) {
        case "all":
          //return filteredTodos;
          break;
        case "completed":
          filteredTodos.filter( todo => todo.completed === true);
          break;
        case "uncompleted":
            filteredTodos.filter( todo => todo.completed === false);
          break;
        default:
      };

    return (
        
        <div className="todo-container">
            <ul className="todo-list">
                {/* map a filtered todos list instead */}
                {filteredTodos.map(todo => (
                    <Todo key = {todo.id} text = {todo.text} setTodos={setTodos} todos={todos} todo={todo}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList; 
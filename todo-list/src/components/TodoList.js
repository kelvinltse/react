import React from "react";
import Todo from "./components/Todo";

const TodoList = ({todos}) => {

    todos.forEach(renderToDoList);

    function renderToDoList(todos) {
        return (
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.text}
                </ul>
            </div>
        )
        
    }


    // return (
        
    //     <div className="todo-container">
    //         <ul className="todo-list">
    //             <Todo/>
    //         </ul>
    //     </div>
    // )
}

export default TodoList;
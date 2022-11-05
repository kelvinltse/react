import React from "react";

const Todo = ( {text, todo, todos, setTodos} ) => {

    const handleClick = () => {
        console.log("click handled");        
        //setTodos(todos.filter( (el) ))
    };

    const handleDelete = () => {
        setTodos(todos.filter( (el) => el.id !== todo.id));
    };

    return ( 
        <div className="todo"> 
            <li className="todo-item">{text}</li>
            <button className="complete-btn" onClick={handleClick}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
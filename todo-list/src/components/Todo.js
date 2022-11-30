import React from "react";

const Todo = ( {text, todo, todos, setTodos} ) => {

    const handleComplete = () => {      
        setTodos( //because of react shallow render, use spread operator to create new object in memory
            todos.map(element => {
                if (element.id === todo.id) {
                    return {
                        ...element, 
                        completed: !todo.completed,
                    };
                }
                return element;
            })
        )
    };

    const handleDelete = () => {
        setTodos(todos.filter( (el) => el.id !== todo.id));
    };

    return ( 
        <div className="todo"> 
            {/* <li className="todo-item">{text}</li> */}
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button className="complete-btn" onClick={handleComplete}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;
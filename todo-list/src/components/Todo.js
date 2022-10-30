import React from "react";

const Todo = ( {todos} ) => {
    
    console.log(todos[0].text);

    if (todos.length > 0) {
        todos.forEach(element => {
            return (
                <div className="todo">
                    <li className="todo-item">{element.text}</li>
                    <button className="complete-btn">
                        <i className="fas fa-check"></i>
                    </button>
                    <button className="trash-btn">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            );
        });
    } 
    return (
        <div className="sad-todo">
        </div>
    )
    // return (
    //     <div className="todo">
    //         {todos.length > 0 &&
    //         <div>
    //         <li className="todo-item">{todos[0].text}</li>
    //         <button className="complete-btn">
    //             <i className="fas fa-check"></i>
    //         </button>
    //         <button className="trash-btn">
    //             <i className="fas fa-trash"></i>
    //         </button>
    //         </div>
    //      }   
    //     </div>
    // );
}

export default Todo;
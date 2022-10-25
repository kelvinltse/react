import React from "react";

const Form = (props) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        props.setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        console.log("heey");
        e.preventDefault();
        props.setTodos([
            ...props.todos, {text: props.inputText, completed: false, id: Math.random() * 1000}
        ])
    }

    return (
        <form onSubmit={submitHandler}>
            <input onChange={inputTextHandler} className="todo-input" />
            {/* onClick handler on button instead of onSubmit on Form? */}
            <button className="todo-button" type="submit"> 
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
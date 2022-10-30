import React from "react";

const Form = ( {setInputText, setTodos, todos, inputText}) => { //doing this is the equivalent of passing props in and not forcing you to call props each time below

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        console.log("heey");
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
        console.log(todos);
        console.log("todos length " + todos.length);
    }

    return (
        <form onSubmit={submitHandler}>
            <input value={inputText} onChange={inputTextHandler} className="todo-input" />
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
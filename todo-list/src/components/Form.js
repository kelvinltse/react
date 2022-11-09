import React from "react";

const Form = ( {setInputText, setTodos, setListView, todos, inputText, listView}) => { //doing this is the equivalent of passing props in and not forcing you to call props each time below

    //const filteredTodos = new Map(todos);

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
        console.log(todos);
    }

    const selectionHandler = (e) => {
        setListView(e.target.value);
        console.log(listView);
    }

    return (
        <form onSubmit={submitHandler}>
            <input value={inputText} onChange={inputTextHandler} className="todo-input" />
            <button className="todo-button" type="submit"> 
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={selectionHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
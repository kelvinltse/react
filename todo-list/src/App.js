import React, { useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [listView, setListView] = useState("all"); //pass down to todolist and form

  //use effect

  useEffect(() => { //run once when app starts
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  //save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos)); 
  }; 

  const getLocalTodos = () => { //state and local storage not persisting on refresh
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else { 
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
      </header>
      <Form inputText = {inputText} setInputText = {setInputText} todos = {todos} setTodos = {setTodos} setListView = {setListView} listView = {listView} />
      <TodoList todos = {todos} setTodos = {setTodos} listView = {listView}/>
    {/* self-invoking function for conditional rendering with switch     */}
    </div>
  );
}

export default App;

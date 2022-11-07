import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [listView, setListView] = useState("all"); //pass down to todolist and form

  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
      </header>
      <Form inputText = {inputText} setInputText={setInputText} todos={todos} setTodos = {setTodos} setListView = {setListView} listView = {listView} />
      <TodoList todos = {todos} setTodos={setTodos}/>
      {(() => { 
        switch(listView) {
          case "all":
            return <div>"all list view"</div>;
            break;
          case "completed":
            return <div>"completed list view"</div>;
            break;
          case "uncompleted":
            return <div>"uncompleted list view"</div>;
            break;
          default:
            return null;
        };
      })()}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import "./App.css"
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";


const App = () => {

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filtersTodos, setFiltersTodos] = useState([]);

    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem('todos') === null ){
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
    };

    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFiltersTodos(todos.filter(todo => todo.completed === true));
                break;
            case "uncompleted":
                setFiltersTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFiltersTodos(todos);
                break;
        }
    };

    useEffect(() => {
        getLocalTodos();
    },[]);
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    },[todos, status]);

    return (
        <div>
            <div className="main-container">
                <header>
                    <h1>TazbeeR`s ToDo List</h1>
                </header>
                <Form setStatus={setStatus} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
                <ToDoList setTodos={setTodos} todos={todos} filtersTodos={filtersTodos} />
            </div>
        </div>
    );
};

export default App;

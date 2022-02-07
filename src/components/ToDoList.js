import React from 'react';
import ToDo from './ToDo'
const ToDoList = ({todos, setTodos, filtersTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filtersTodos.map((todo) =>(
                    <ToDo setTodos={setTodos} todos={todos} todo={todo} key={todo.id} text={todo.text}/>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;

import React from 'react';
import Todo from './Todo';
import "./App.css"

const TodoList = ({ todos, toggleTodo }) => (
    <div className='todolist'>
    <h1> Todo List </h1>
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul></div>
);

export default TodoList;
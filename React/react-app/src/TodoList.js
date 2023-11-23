import React from 'react'
import Todo from './Tododesu'

const TodoList = ({todos, toggleTodo}) => {
  return todos.map((todo) => (<Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />))
};

export default TodoList
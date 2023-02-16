import React from 'react';

function TodoList(props) {
  const { todos, onTodoClick } = props;

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} onClick={() => onTodoClick(index)}>
          {todo.completed ? <del>{todo.text}</del> : todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

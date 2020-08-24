import React from 'react';

import TodoListItem from './toDoListItem/toDoListItem';
import './toDoList.css';

const TodoList = ({ todoData, onDeleted }) => {

  const elements = todoData.map((item) => {
    const { label,important, id } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
                      label={label} important={important}
                      onDeleted={() => onDeleted(id)} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;

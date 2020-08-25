import React from 'react';

import TodoListItem from './toDoListItem/toDoListItem';
import './toDoList.css';

const TodoList = ({ todoData, onDeleted, onImportant, onToggleDone }) => {

  const elements = todoData.map((item) => {

    const { label,important,done, id } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
                      label={label} important={important} done={done}
                      onDeleted={() => onDeleted(id)}
                      onImportant={()=> onImportant(id)}
                      onToggleDone={() => onToggleDone(id)}
                       />
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

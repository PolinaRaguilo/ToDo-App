import React from 'react';

import './toDoListItem.css';

class TodoListItem extends React.Component {


  render(){

  const { label, onDeleted,onImportant, onToggleDone, important, done } = this.props;

  let classNames = 'todo-list-item';

  if (done) {
    classNames += ' done';
  }

  if (important){
    classNames += ' important';
  }

  return (
    <div className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={onImportant}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </div>
  );
  }
};

export default TodoListItem;

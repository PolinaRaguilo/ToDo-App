import React from 'react';

import './toDoListItem.css';

class TodoListItem extends React.Component {

  constructor() {
    super();
    this.state={
      done: false,
      important: false
    }
    this.onLabelClick=() => {
      this.setState(({done}) => {
        return {
          done: !done
        }
      })
    }
    this.onImportantClick=() => {
      this.setState(({important}) =>{
        return {
          important: !important
        }
      })
    }
  } 

  render(){

  const { label } = this.props;
  const {done, important} = this.state;

 

  let classNames = 'todo-list-item';
  if (done) {
    classNames += ' done';
  }

  if (important){
    classNames += ' important'
  }

  return (
    <div className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={this.onLabelClick}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={this.onImportantClick}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={this.props.onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </div>
  );
  }
};

export default TodoListItem;

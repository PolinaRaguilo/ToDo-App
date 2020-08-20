import React from 'react';
import ListItem from './toDoListItem/toDoListItem';

const ToDoList = ({todoData}) => {

  const items = todoData.map((item) => {

    const {label,important,id} = item;

    return(
    <ListItem label={label} important={important} key={id}/>
    )
  })

  return(
    <ul>
      {items}
    </ul>
  )
};

export default ToDoList;
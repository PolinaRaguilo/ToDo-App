import React from 'react';
import AppHeader from '../header/header';
import ToDoList from '../toDoList/toDoList';
import SearchPanel from '../searchPanel/searchPanel';
import ItemStatusFilter from '../itemStatusFilter/itemStatusFilter';

import './app.css';

const App = () => {
  const todoData= [
    {label: 'Прочитать книгу', important:false, id: 1},
    {label: 'Дописать проект', important:true, id: 2},
    {label: 'Сходить в магазин', important:false, id:3},
  ]

  return(
    <div className="todo-app">
      <AppHeader toDo={1} done={3}/>
    <div className="top-panel d-flex">
      <SearchPanel/>
      <ItemStatusFilter/>
    </div>

      <ToDoList todoData={todoData}/>
    </div>
  )
}

export default App;
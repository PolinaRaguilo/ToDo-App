import React from 'react';
import AppHeader from '../header/header';
import ToDoList from '../toDoList/toDoList';
import SearchPanel from '../searchPanel/searchPanel';

const App = () => {
  const todoData= [
    {label: 'Прочитать книгу', important:false, id: 1},
    {label: 'Дописать проект', important:true, id: 2},
    {label: 'Сходить в магазин', important:false, id:3},
  ]

  return(
    <div>
      <AppHeader/>
      <SearchPanel/>
      <ToDoList todoData={todoData}/>
    </div>
  )
}

export default App;
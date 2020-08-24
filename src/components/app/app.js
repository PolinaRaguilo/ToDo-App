import React from 'react';
import AppHeader from '../header/header';
import ToDoList from '../toDoList/toDoList';
import SearchPanel from '../searchPanel/searchPanel';
import ItemStatusFilter from '../itemStatusFilter/itemStatusFilter';
import AddItem from '../addItem/addItem';

import './app.css';


class App extends React.Component {
  maxId = 50;

  state = {
    todoData: [
      {label: 'Прочитать книгу', important:false, id: 1},
      {label: 'Дописать проект', important:true, id: 2},
      {label: 'Сходить в магазин', important:false, id:3},
    ]
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idEl = todoData.findIndex((el) => el.id === id);

      const before = todoData.slice(0, idEl);
      const after = todoData.slice(idEl + 1);

      const newToDoData = [...before, ...after]
      return {
        todoData: newToDoData
      }
    })
  }

  addItem = (text) => {

    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({ todoData }) => {
      
      let newArr = [
        ...todoData,
        newItem
      ]
       return {
         todoData: newArr
       }
    })

  }


  render(){
  return(
    <div className="todo-app">
      <AppHeader toDo={1} done={3}/>
    <div className="top-panel d-flex">
      <SearchPanel/>
      <ItemStatusFilter/>
    </div>

      <ToDoList todoData={this.state.todoData}
                onDeleted={this.deleteItem}
      />
      <AddItem onItemAdded={this.addItem}/>
    </div>
  )
  }
}

export default App;
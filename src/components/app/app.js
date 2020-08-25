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
      this.createItem('Прочитать книгу'),
      this.createItem('Дописать проект'),
      this.createItem('Сходить в магазин')
    ],
    term: '',
    filter: 'all'
  };

  createItem(text){
    return{
      label: text,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

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

    const newItem = this.createItem(text);

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

  toggleProperty(arr, id, propName){
    const idEl = arr.findIndex((el) => el.id === id);

      const oldItem = arr[idEl];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};

      return [...arr.slice(0, idEl), newItem, ...arr.slice(idEl + 1)]
  }

  onImportant = (id) => {
    this.setState(({ todoData })=>{
      return{
        todoData: this.toggleProperty(todoData,id, 'important')
      };
    });
  }


  onToggleDone = (id) => {
    this.setState(({ todoData })=>{
      return{
        todoData: this.toggleProperty(todoData,id, 'done')
      };
    });
  };



  search(items, term){
    if(term.length === 0){
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  onSearchChange = (term) => {
    this.setState({ term })
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  filter(items, filter){
    switch(filter){
      case 'all':
        return items;
      case 'active':
        return items.filter((item) =>  !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    };
  }



  render(){

    const { todoData, term, filter } = this.state;

    const visibleItems =this.filter( this.search(todoData, term), filter);

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

  return(
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount}/>
    <div className="top-panel d-flex">
      <SearchPanel 
                    onSearchChange={this.onSearchChange}
      />
      <ItemStatusFilter   
                        filter={filter}
                        onFilterChange={this.onFilterChange}
                        />
    </div>

      <ToDoList todoData={visibleItems}
                onDeleted={this.deleteItem}
                onImportant = {this.onImportant}
                onToggleDone={this.onToggleDone}
      />
      <AddItem onItemAdded={this.addItem}/>
    </div>
  )
  }
}

export default App;
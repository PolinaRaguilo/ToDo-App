import React from 'react';
import './header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Список дел</h1>
      <h2>{toDo} к выполнению,{done} завершена</h2>
    </div>
  );
};

export default AppHeader;

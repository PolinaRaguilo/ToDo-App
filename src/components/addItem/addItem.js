import React from 'react';

import './addItem.css';


const AddItem = () => {
  return(
    <div className="addItem">
      <button 
              className="btn btn-outline-secondary"
              onClick={() => this.props.onItemAdded()}>Добавить </button>
    </div>
  )
}

export default  AddItem;
import React from 'react';

import './itemStatusFilter.css';

class ItemStatusFilter extends React.Component {

  buttons = [
    {name:'all', label: 'All'},
    {name:'active', label: 'Active'},
    {name:'done', label: 'Done'}
  ];

  render(){

    const{ filter, onFilterChange } = this.props;
    
    let buttons = this.buttons.map(({ name, label }) => {
      let isActive = filter === name;
      let classes = isActive ? 'btn-info' : 'btn-outline-secondary'
      return(
      <button type="button"
              className={`btn ${classes}`}
              key={name}
              onClick={() => onFilterChange(name) }>
          {label}
        </button>
      )
    });

  return (
    <div className="btn-group">
      {buttons}
    </div>
    );
  }
};

export default ItemStatusFilter;

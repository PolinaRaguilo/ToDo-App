import React from 'react';



class ItemStatusFilter extends React.Component {

  buttons = [
    {name:'all', label: 'Все'},
    {name:'active', label: 'Активны'},
    {name:'done', label: 'Завершены'}
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

import React from 'react';

import './addItem.css';


class AddItem extends React.Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label:''
    })
    
  }

  render(){
    return(
      <form className=" item-add-form d-flex"
            onSubmit={this.onSubmit}>
      <input type="text"
             className="form-control"
             onChange = {this.onLabelChange}
             placeholder="Что нужно сделать?"
             value={this.state.label}
      />
        <button 
                className="btn btn-outline-secondary">
            Добавить </button>
      </form>
    )
  }
}

export default  AddItem;
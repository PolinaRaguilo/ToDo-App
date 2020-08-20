import React from 'react';


const ListItem = ({label, important=false}) => {

  const liStyle = {
    color: important ? 'tomato' : 'black'
  }

  return(
    <div>
      <li style={liStyle} >{label}</li>
    </div>
  )
}

export default ListItem;
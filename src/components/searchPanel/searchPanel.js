import React from 'react';

import './searchPanel.css';

const SearchPanel = () => {
  return (
    <input type="text"
              className="form-control search-input"
              placeholder="Искать..." />
  );
};

export default SearchPanel;

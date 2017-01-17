import React from 'react';

const propTypes = {
  // visible: React.PropTypes.bool.isRequired,
  // onConfirm: React.PropTypes.func.isRequired,
  // onCancel: React.PropTypes.func.isRequired,
};

class Searchbar extends React.Component {
  constructor() {
    super();
  }

  handleCancel () {
    
  }

  render () {
    return (
      <div className="ui-searchbar">
        <div className="search-input">
          <input type="search" placeholder="搜索" />
          <span className="icon-clear"></span>
        </div>
      </div>
    )
  }
}

Searchbar.propTypes = propTypes;

export default Searchbar;

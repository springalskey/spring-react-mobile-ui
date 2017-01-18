import React from 'react';
import { Searchbar } from '../../components';

export default class SearchbarDemo extends React.Component {
  constructor() {
    super();
  }

  handleChange (value) {
    console.log(value)
  }

  celick () {
    alert(1);
  }

  render() {
    return (
      <div className="searchbar-demo">
        <Searchbar onChange={this.handleChange.bind(this)} />
        <div className="list">
          <div className="item">
            <label className="item-label">
              picker demo
            </label>
          </div>
        </div>

        <div className="list">
          <div className="item">
            <label className="item-label" onClick={this.celick.bind(this)}>
              tost demo
            </label>
          </div>
        </div>
      </div>
    )
  }

}

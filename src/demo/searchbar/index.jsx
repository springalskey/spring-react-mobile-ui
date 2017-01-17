import React from 'react';
import { Searchbar } from '../../components';

export default class SearchbarDemo extends React.Component {
  constructor() {
    super();
  }

  handleChange (value) {
    console.log(value)
  }

  render() {
    return (
      <div className="searchbar-demo">
        <Searchbar onChange={this.handleChange.bind(this)} />
      </div>
    )
  }

}

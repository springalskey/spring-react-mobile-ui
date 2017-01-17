import React from 'react';
import { Searchbar } from '../../components';

export default class SearchbarDemo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="searchbar-demo">
        <Searchbar></Searchbar>
      </div>
    )
  }

}

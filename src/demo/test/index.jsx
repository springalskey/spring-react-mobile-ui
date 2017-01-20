import React from 'react';
import {Link} from 'react-router';

export default class TestDemo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="test-demo">
        <Link to="/">to index page</Link>
      </div>
    )
  }

}

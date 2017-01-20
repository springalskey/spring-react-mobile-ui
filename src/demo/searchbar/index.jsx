import React from 'react';
import {Link} from 'react-router';
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
        <div className="list-wrap">
          <div className="list">
            <div className="item">
              <label className="item-label">
                picker demo
              </label>
            </div>
          </div>

          <div className="list">
            <div className="item">
              <Link to="/test-demo" className="item-label">
                tost demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

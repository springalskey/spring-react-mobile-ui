import React from 'react';
import {Link} from 'react-router';

import './index.scss'

export default class ListDemo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="list-demo">
        <h1>List Style</h1>
        <div className="list">
          <div className="item">
            <Link className="item-label" to="/picker-demo">
              picker demo
            </Link>
          </div>
        </div>

        <div className="list">
          <div className="item">
            <Link className="item-label" to="/toast-demo">
              tost demo
            </Link>
          </div>
        </div>

        <div className="list">
          <div className="item">
            <Link className="item-label" to="/confirm-demo">
              confirm demo
            </Link>
          </div>
        </div>

        <div className="list">
          <div className="item">
            <Link className="item-label" to="/infinite-scroll-demo">
              infinite scroll demo
            </Link>
          </div>
        </div>
      </div>
    )
  }

}

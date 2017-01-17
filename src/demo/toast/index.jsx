import React from 'react';
import {Link} from 'react-router';

import { Toast } from '../../components';

export default class ToastDemo extends React.Component {
  constructor() {
    super();
  }

  handleClick () {
    Toast.show('这是测试显示toast');
  }

  render() {
    return (
      <div className="home">
        <h1 className="title">Toast</h1>
        <div className="button-wrap">
          <button
            type="button"
            onClick={this.handleClick.bind(this)}
            className="btn button-primary margin-top-15">
              Toast Test
          </button>
        </div>
      </div>
    )
  }
}

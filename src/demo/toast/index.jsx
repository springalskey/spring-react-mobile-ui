import React from 'react';
import {Link} from 'react-router';
import './index.scss';

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
        <h1>Toast</h1>
        <button
          type="button"
          onClick={this.handleClick.bind(this)}
          className="btn button-primary">
            Toast Test
        </button>
      </div>
    )
  }
}

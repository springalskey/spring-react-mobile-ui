import React from 'react';
import {Link} from 'react-router';
import './index.scss';

import { Confirm } from '../../components';

export default class ConfirmDemo extends React.Component {
  constructor() {
    super();
  }

  handleClick () {
    Confirm.show('确认删除选中项吗?', () => {
      console.log('确定');
    });
  }

  render() {
    return (
      <div className="home">
        <h1>Confirm</h1>
        <button
          type="button"
          onClick={this.handleClick.bind(this)}
          className="btn button-primary">
            Confrim Test
        </button>
      </div>
    )
  }
}
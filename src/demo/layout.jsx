import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import './layout.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="layout">
        <ReactCSSTransitionGroup
          component="div"
          transitionName="page-transition"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

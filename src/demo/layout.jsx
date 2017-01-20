import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends React.Component {
  constructor() {
    super();
    this.preURL = "";
    this.state = {
      back: false
    }
  }

  componentWillReceiveProps(nextProps) {
    let current = nextProps.location.pathname;
    if (current === '/' || this.preURL === current) {
      this.setState({ back: true });
    } else {
      this.setState({ back: false });
    }
    this.preURL = this.props.location.pathname
  }

  render() {
    const name = this.state.back ? '-back' : '';
    return (
      <div className="layout">
        <ReactCSSTransitionGroup
          component="div"
          transitionName={'page-transition'+ name}
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

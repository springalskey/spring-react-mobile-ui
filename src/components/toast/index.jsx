import React from 'react';
import ReactDOM from 'react-dom';

class Toast extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.setTimeout = setTimeout(() => {
      ctrl.close();
      clearTimeout(this.setTimeout);
    }, 2000);
  }

  render () {
    return (
      <div className="ui-toast-wrapper">
          <div className="ui-toast">
            { this.props.message }
          </div>
      </div>
    )
  }
}


const ctrl = {

  div: null,

  render(message) {
    this.div = document.createElement('div');
    document.body.appendChild(this.div);
    ReactDOM.render(
      <Toast message={ message }></Toast>
    , this.div);
  },

  close () {
    const unmountResult = ReactDOM.unmountComponentAtNode(this.div);
    if (unmountResult) {
      this.div.parentNode.removeChild(this.div);
    }
  }
}


export default {
  show (message) {
    ctrl.render(message);
  }
};

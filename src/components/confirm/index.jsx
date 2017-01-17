import React from 'react';
import ReactDOM from 'react-dom';

class Confirm extends React.Component {
  constructor() {
    super();
  }

  handlerConfirm () {
    this.props.confirm();
    ctrl.close();
  }

  handlerCancel () {
    ctrl.close();
  }

  render () {

    return (
      <div className="ui-confirm-wrapper">
          <div className="ui-confirm">
            <div className="message">{ this.props.message }</div>
            <div className="footer">
              <button className="button button-small"
                onClick={this.handlerConfirm.bind(this)}>确定</button>
              <button className="button button-small"
                onClick={this.handlerCancel.bind(this)}>取消</button>
            </div>
          </div>
      </div>
    )
  }
}

const ctrl = {

  div: null,

  render(message, confirmFn) {
    this.div = document.createElement('div');
    document.body.appendChild(this.div);
    ReactDOM.render(
      <Confirm message={message} confirm={confirmFn}></Confirm>
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
  show (message, confirmFn) {
    ctrl.render(message, confirmFn);
  }
};

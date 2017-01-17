import React from 'react';

const propTypes = {
  onChange: React.PropTypes.func.isRequired,
};

class Searchbar extends React.Component {
  constructor() {
    super();
    this.state = {
      visibleClear: false,
      visibleCancel: false,
      value: '',
    }
  }

  handleChange (e) {
    const v = e.target.value;
    this.setState({
      value: v,
      visibleClear: true,
    });
    this.props.onChange(v);
  }

  handleCancel () {
    this.setState({
      visibleCancel: false,
      visibleClear: false,
      value: '',
    });
    this.props.onChange();
  }

  handleFocus () {
    this.setState({
      visibleClear: false,
      visibleCancel: true,
    });
  }

  handleClear () {
    this.setState({
      visibleClear: false,
      value: '',
    });
    this.props.onChange();
  }

  render () {
    let style = this.state.visibleCancel ? { marginRight: '0px' } : null;
    return (
      <div className="ui-searchbar">
        <div className="search-input">
          <input 
            value={this.state.value}
            type="text" 
            placeholder="搜索" 
            onChange={this.handleChange.bind(this)}
            onFocus={this.handleFocus.bind(this)}
          />
          {
            this.state.visibleClear ? 
              <span 
                onClick={this.handleClear.bind(this)} 
                className="icon-clear">
              </span> : null
          }
        </div>
        <span 
          onClick={this.handleCancel.bind(this)} 
          style={style}
          className="cancel">
            取消
        </span>
      </div>
    )
  }
}

Searchbar.propTypes = propTypes;

export default Searchbar;

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
      visibleOverlay: false,
      value: '',
    }
  }

  handleChange (e) {
    const v = e.target.value;
    const bool = v ? true : false;
    this.setState({
      value: v,
      visibleClear: bool,
      visibleOverlay: !bool,
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
    this.removeOverlay();
  }

  removeOverlay () {
    var overlay = this.refs.overlay;
    if (overlay && overlay.className.indexOf("fadeOut") === -1){
      overlay.addEventListener("animationend",() => {
        this.setState({
          visibleOverlay: false,
        });
      }, false);
    }
  }

  handleFocus (e) {
    if (!e.target.value) {
      this.setState({
        visibleClear: false,
        visibleCancel: true,
        visibleOverlay: true,
      });
    }
  }

  handleClear () {
    this.setState({
      visibleClear: false,
      visibleOverlay: true,
      value: '',
    });
    this.props.onChange();
  }

  handleTouchStart (e) {
    e.preventDefault();
  }

  getOverlay (className) {
    return (
      <div 
        onTouchStart={this.handleTouchStart.bind(this)}
        className={'searchbar-overlay ' + className} 
        ref="overlay">
      </div>
    );
  }

  render () {
    let style = this.state.visibleCancel ? { marginRight: '0px' } : null;
    let overlay = null;
    if (this.state.visibleOverlay ) {
      if (this.state.visibleCancel ) {
        overlay = this.getOverlay('fadeIn');
      } else {
        overlay = this.getOverlay('fadeOut');
      }
    }
    return (
      <div className="ui-searchbar-wrapper">
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
        { overlay }
      </div>
    )
  }
}

Searchbar.propTypes = propTypes;

export default Searchbar;

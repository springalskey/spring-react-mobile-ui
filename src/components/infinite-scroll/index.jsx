import React from 'react';
import ReactDOM from 'react-dom';

const propTypes = {
  // 每一页显示多少条
  size: React.PropTypes.number.isRequired,
  // 加载数据的回调
  onInfinite: React.PropTypes.func.isRequired,
  // 加载完毕的回调（当最后一页达不到size的条数，则证明加载完毕）
  onLoaded: React.PropTypes.func,
}

class InfiniteScroll extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.loading = true;
  }

  handleScroll (e) {
    e.preventDefault();
    if (this.loading) {
      return;
    }
    const length = this.props.children.length;
    const size = this.props.size;
    if ( length < size) {
      if (this.props.onLoaded) {
        this.props.onLoaded();
      }
      return;
    }
    if (length % size !== 0) {
      this.props.onLoaded();
      return;
    }
    const scrollTop = e.nativeEvent.target.scrollTop;
    const srcollHeight = e.nativeEvent.target.scrollHeight;
    const clientHeight = e.nativeEvent.target.clientHeight;
    if ((srcollHeight - scrollTop) === clientHeight ) {
      this.loading = true;
      this.props.onInfinite(this.loaded);
    }
  }

  render () {
    this.loading = false;
    return (
      <div className="ui-infinite-scroll"
        onScroll={this.handleScroll.bind(this)}>
        {this.props.children}
      </div>
    )
  }
}

InfiniteScroll.propTypes = propTypes;

export default InfiniteScroll;


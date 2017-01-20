import React from 'react';
import { InfiniteScroll } from '../../components';

export default class InfiniteScrollDemo extends React.Component {
  constructor() {
    super();
    this.length = 20;
    const list = [];
    for (let i = 0; i < this.length; i++) {
      list.push('item');
    }
    this.state = {
      list: list,
    };
    this.count = 0;
  }

  handleInfinite () {
    this.count ++ ;
    if (this.count === 3) {
      this.length = 2;
    }
    let list = [];
    for (let i = 0; i < this.length; i++) {
      list.push('item');
    }
    setTimeout(() => {
      this.setState({
        list: this.state.list.concat(list)
      });
    },500);
  }

  handleLoaded () {
    if (document.querySelector('.infinite-loaded')) {
      return;
    }
    var dom = document.createElement('div');
    dom.className = 'infinite-loaded';
    dom.innerHTML = '已加载全部';
    document.querySelector('.ui-infinite-scroll').appendChild(dom);
  }

  render() {
    return (
      <div className="infinite-scroll-demo">
        <h1>Infinite Scroll</h1>
        <InfiniteScroll 
          size={20}
          onLoaded={this.handleLoaded.bind(this)}
          onInfinite={this.handleInfinite.bind(this)}>
            {
              this.state.list.map( (item, index) => {
                return (
                  <div className="list" key={index}>
                    <div className="item">
                      <label className="item-label">
                        {item + (index + 1)}
                      </label>
                    </div>
                  </div>
                )
              })
            }
        </InfiniteScroll>
      </div>
    )
  }

}

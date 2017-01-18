import React from 'react';
import ReactDOM from 'react-dom';

const propTypes = {
  // 是否手风琴效果
  accordion: React.PropTypes.bool.isRequired,
};

class Accordion extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      activeIndexList: [],
    };
  }

  getItem () {
    const newChildren = [];
    this.props.children.forEach((child, index) => {
      let isActive = this.state.activeIndexList.indexOf(index) !== -1;
      const props = {
        key: index,
        isActive: isActive,
        title: child.props.title,
        children: child.props.children,
        onItemClick: this.onItemClick.bind(this,index),
      };
      newChildren.push(React.cloneElement(child, props));
    });
    return newChildren;
  }

  onItemClick (childIndex) {
    if (this.props.accordion) {
      this.accordionActive(childIndex);
    } else {
      this.accordionDisable(childIndex);
    }
  }

  // 手风琴效果
  accordionActive (childIndex) {
    // 有值展开；等于null收缩
    const index = this.state.activeIndexList[0] === childIndex ? null : childIndex;
    this.setState({
      activeIndexList: [index]
    });
  }

  // 非手风琴效果
  accordionDisable (childIndex) {
    // 判断展开或关闭
    const index = this.state.activeIndexList.indexOf(childIndex);
    if (index === -1) {
      this.state.activeIndexList.push(childIndex);
    } else {
      this.state.activeIndexList.splice(index, 1);
    }
    this.setState({
      activeIndexList: this.state.activeIndexList
    });
  }

  render () {
    return (
      <div className="ui-accordion-wrapper">
        {this.getItem()}
      </div>
    )
  }
}

Accordion.propTypes = propTypes;

export default Accordion;


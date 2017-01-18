import React from 'react';
import ReactDOM from 'react-dom';

const propTypes = {
  // 是否手风琴
  accordion: React.PropTypes.bool,
};

class Accordion extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      activeIndex: null,
    };
  }

  getItem () {
    const newChildren = [];
    this.props.children.forEach((child, index) => {
      const isActive = index === this.state.activeIndex;
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

  onItemClick (index) {
    index = this.state.activeIndex === index ? null : index;
    this.setState({
      activeIndex: index
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


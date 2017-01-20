import React from 'react';
import ReactDOM from 'react-dom';

const propTypes = {
  // 标题
  title: React.PropTypes.string.isRequired,
};

class AccordionItem extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.height = 0;
  }

  handleClickItem () {
    this.props.onItemClick();
  }

  componentDidMount () {
    this.height = this.refs.content.scrollHeight;
  }

  render () {
    const style = this.props.isActive ? {height: this.height} : {height: 0};
    return (
      <div 
        className="ui-accordion-item">
          <div className="item-title" 
            onClick={this.handleClickItem.bind(this)}>
            <span>{this.props.title}</span>
          </div>
          <div className="item-content" style={style} ref="content">
            {this.props.children}
          </div>
      </div>
    )
  }
}

AccordionItem.propTypes = propTypes;

export default AccordionItem;


import React, { Component, PropTypes } from 'react';

class Label extends Component {

  render() {
    const classes = [
      this.props.componentCSSClassName,
      this.props.className,
    ].join(' ').trim();

    const LabelComponent = React.createElement(
      'label',
      {
        ...this.props,
        htmlFor: this.props.htmlFor,
        className: classes,
      },
      [this.props.text, this.props.children]
    );

    return LabelComponent;
  }

}

Label.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  componentCSSClassName: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string,
};

Label.defaultProps = {
  componentCSSClassName: 'label',
  text: null,
};

export default Label;

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
  htmlFor: PropTypes.string.isRequired,
  componentCSSClassName: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
};

Label.defaultProps = {
  componentCSSClassName: 'label',
  text: null,
};

export default Label;

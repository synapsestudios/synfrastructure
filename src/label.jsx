import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Label extends Component {

  render() {
    const labelClasses = {
      label: true,
      [`${this.props.className}`]: this.props.className,
    };

    const LabelComponent = React.createElement(
      'label',
      {
        ...this.props,
        htmlFor: this.props.htmlFor,
        className: classNames(labelClasses),
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

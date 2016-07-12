import React, { Component, PropTypes } from 'react';

import Icon from './icon';
import EyeOpenIcon from './icons/eye-open';
import EyeClosedIcon from './icons/eye-closed';

class PasswordInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      revealPassword: false,
    };

    this.toggleReveal = this.toggleReveal.bind(this);
  }

  shouldRevealPassword() {
    // always trust prop before state
    return typeof this.props.revealPassword === 'undefined' ?
      this.state.revealPassword : this.props.revealPassword;
  }

  toggleReveal() {
    // always trust prop before state
    if (typeof this.props.revealPassword === 'undefined') {
      this.setState({
        revealPassword: !this.state.revealPassword,
      });
    } else {
      this.props.toggleReveal();
    }
  }

  renderPasswordRevealIcon() {
    const RevealIcon = this.props.revealIcon ? this.props.revealIcon : EyeOpenIcon;
    const HideIcon = this.props.hideIcon ? this.props.hideIcon : EyeClosedIcon;

    return (
      <div
        className="input__password-reveal"
        onClick={this.toggleReveal}
      >
        <Icon>{this.shouldRevealPassword() ? <RevealIcon /> : <HideIcon />}</Icon>
      </div>
    );
  }

  render() {
    return (
      <div>
        <input
          type={this.shouldRevealPassword() ? 'text' : 'password'}
          className="input"
          {...this.props}
        />
        {this.renderPasswordRevealIcon()}
      </div>
    );
  }
}

// use revealPassword/toggleReveal props to control the reveal,
// otherwise the component uses local state
PasswordInput.propTypes = {
  hideIcon: PropTypes.func,
  revealIcon: PropTypes.func,
  revealPassword: PropTypes.bool,
  toggleReveal: PropTypes.func,
};

export default PasswordInput;

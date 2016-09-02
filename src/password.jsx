'use strict';

import React from 'react';
import Icon from './icon';
import EyeOpenIcon from './icons/eye-open';
import EyeClosedIcon from './icons/eye-closed';

export default React.createClass({

    displayName : 'PasswordInput',

    propTypes : {
        // use these props to control the reveal, otherwise the component uses local state
        revealPassword : React.PropTypes.bool,
        toggleReveal : React.PropTypes.func,

        revealIcon : React.PropTypes.func,
        hideIcon : React.PropTypes.func
    },

    getInitialState()
    {
        return {
            revealPassword : false
        };
    },

    shouldRevealPassword()
    {
        // always trust prop before state
        return typeof this.props.revealPassword === 'undefined' ? this.state.revealPassword : this.props.revealPassword;
    },

    toggleReveal()
    {
        // always trust prop before state
        if (typeof this.props.revealPassword === 'undefined') {
            this.setState({revealPassword: !this.state.revealPassword});
        } else {
            this.props.toggleReveal();
        }
    },

    renderPasswordRevealIcon()
    {
        let RevealIcon = this.props.revealIcon ? this.props.revealIcon : EyeOpenIcon;
        let HideIcon = this.props.hideIcon ? this.props.hideIcon : EyeClosedIcon;

        return (
            <div className='input__password-reveal' onClick={this.toggleReveal}>
                <Icon>{this.shouldRevealPassword() ? <RevealIcon /> : <HideIcon />}</Icon>
            </div>
        );
    },

    render()
    {
        return (
            <div>
                <input
                    type = {this.shouldRevealPassword() ? 'text' : 'password'}
                    className = 'input'
                />
                {this.renderPasswordRevealIcon()}
            </div>
        );
    }
});

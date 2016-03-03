'use strict';

import React from 'react';
import classNames from 'classnames';
import Icon from './icon';
import EyeOpenIcon from './icons/eye-open';
import EyeClosedIcon from './icons/eye-closed';

export default React.createClass({

    displayName : 'PasswordInput',

    propTypes : {
        revealPassword : React.PropTypes.bool,
        toggleReveal : React.PropTypes.func
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
        if (typeof this.props.revealPassword === 'undefined') {
            this.props.toggleReveal();
        } else {
            this.setState({revealPassword: !this.state.revealPassword});
        }
    },

    renderPasswordRevealIcon()
    {
        let visibilityIcon = this.shouldRevealPassword() ? <EyeOpenIcon /> : <EyeClosedIcon />;

        return (
            <div className='input__password-reveal' onClick={() => this.setState({revealPassword: !this.state.revealPassword})}>
                <Icon>{this.state.revealPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}</Icon>
            </div>
        );
    },

    render()
    {
        return (
            <div>
                <input
                    type = {this.state.revealPassword ? 'text' : 'password'}
                    className = 'input'
                    {...this.props}
                />
                {this.renderPasswordRevealIcon()}
            </div>
        );
    }
});

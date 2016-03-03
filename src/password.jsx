'use strict';

import React from 'react';
import classNames from 'classnames';
import Icon from './icon';
import EyeOpenIcon from './icons/eye-open';
import EyeClosedIcon from './icons/eye-closed';

export default React.createClass({

    displayName : 'PasswordInput',

    getInitialState()
    {
        return {
            revealPassword : false
        };
    },

    renderPasswordRevealIcon()
    {
        let visibilityIcon = this.state.revealPassword ? <EyeOpenIcon /> : <EyeClosedIcon />;

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

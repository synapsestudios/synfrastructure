import React      from 'react';

let Modal = React.createClass({

    displayName : 'SynfrastructureModal',

    propTypes : {
        reveal     : React.PropTypes.bool.isRequired,
        close      : React.PropTypes.func,
        colorTheme : React.PropTypes.oneOf([
            'dark',
            'light',
            'transparent'
        ])
    },

    getDefaultProps()
    {
        return {
            colorTheme   : 'dark',
            close        : null
        };
    },

    componentWillUpdate(nextProps, nextState)
    {
        if (! this.props.reveal && nextProps.reveal) {
            this.__setBodyOverflow(true);
        } else if (this.props.reveal && ! nextProps.reveal) {
            this.__setBodyOverflow(false);
        }
    },

    __setBodyOverflow(visible)
    {
        if (typeof document === 'undefined') {
            return null;
        }

        visible ? document.body.classList.add('l--modal-revealed') :
          document.body.classList.remove('l--modal-revealed');
    },

    renderModalMask()
    {
        if (! this.props.close) {
            return null;
        }

        return (
            <div
                className = 'modal__mask'
                onClick   = {this.props.close}
                >
            </div>
        );
    },

    render()
    {
        const { children, className, colorTheme, reveal } = this.props;
        const componentClasses = ['modal'];

        if (reveal) {
            componentClasses.push('modal--reveal');
        }

        if (className) {
            componentClasses.push(className);
        }

        if (colorTheme) {
            componentClasses.push(`modal--${colorTheme}`);
        }

        return (
            <div className={componentClasses.join(' ')}>
                <div className='modal__content'>
                    {children}
                </div>
                {this.renderModalMask()}
            </div>
        );

    }

});

export default Modal;

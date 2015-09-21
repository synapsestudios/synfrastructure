'use strict';

let React = require('react');

let Label = React.createClass({

    displayName : 'SynfrastructureFormLabel',

    propTypes : {
        htmlFor               : React.PropTypes.string.isRequired,
        componentCSSClassName : React.PropTypes.string,
        text                  : React.PropTypes.string
    },

    getDefaultProps()
    {
        return {
            componentCSSClassName : 'label',
            text                  : null
      };
    },

    render()
    {
        let Component,
            classes;

        classes = [
            this.props.componentCSSClassName,
            this.props.className
        ].join(' ');

        Component = React.createElement(
            'label',
            {
                ...this.props,
                htmlFor   : this.props.htmlFor,
                className : classes
            },
            [this.props.text, this.props.children]
        );

        return Component;
    }

});

module.exports = Label;

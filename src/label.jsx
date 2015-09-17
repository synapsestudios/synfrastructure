'use strict';

let React                      = require('react');
let SynfrastructureHelperMixin = require('../mixins/synfrastructure-helper-mixin');

let Label = React.createClass({

    displayName : 'SynfrastructureFormLabel',

    mixins : [SynfrastructureHelperMixin],

    propTypes : {
        htmlFor               : React.PropTypes.string.isRequired,
        componentCSSClassName : React.PropTypes.string,
        text                  : React.PropTypes.string,
        attributes            : React.PropTypes.object
    },

    getDefaultProps : function()
    {
        return {
            componentCSSClassName : 'label',
            text                  : null,
            attributes            : null
      };
    },

    render : function()
    {
        var Component,
            classes,
            attributes = {};

        classes = [
            this.props.componentCSSClassName,
            this.props.className
        ].join(' ');

        attributes = {
            htmlFor   : this.props.htmlFor,
            className : classes
        };

        Component = React.createElement(
            'label',
            this.mergeAttributes(
                ...this.props,
                attributes,
                this.props.attributes
            ),
            [this.props.text, this.props.children]
        );

        return Component;
    }

});

module.exports = Label;

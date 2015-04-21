/* jshint globalstrict: true */
'use strict';

var React                      = require('react');
var SynfrastructureHelperMixin = require('../../../mixins/synfrastructure-helper-mixin');

module.exports = React.createClass({

    displayName : 'FormLabel',

    mixins : [SynfrastructureHelperMixin],

    propTypes : {
        htmlFor    : React.PropTypes.string.isRequired,
        text       : React.PropTypes.string,
        attributes : React.PropTypes.object
    },

    getDefaultProps : function()
    {
        return {
            text       : null,
            attributes : null
      };
    },

    render : function()
    {
        var Component,
            classes,
            attributes = {};

        classes = [
            'label',
            this.props.className
        ].join(' ');

        attributes = {
            htmlFor   : this.props.htmlFor,
            className : classes
        };

        Component = React.createElement(
            'label',
            this.mergeAttributes(
                attributes,
                this.props.attributes
            ),
            [this.props.text, this.props.children]
        );

        return Component;
    }

});

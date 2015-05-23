/* jshint globalstrict: true */
'use strict';

module.exports = {

    onFocus : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onFocus) {
            this.props.onFocus(event, currentValue);
        }
    },

    onBlur : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onBlur) {
            this.props.onBlur(event, currentValue);
        }
    },

    onChange : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onChange) {
            this.props.onChange(event, currentValue);
        }
    },

    onKeyUp : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onKeyUp) {
            this.props.onKeyUp(event, currentValue);
        }
    },

    onKeyDown : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onKeyDown) {
            this.props.onKeyDown(event, currentValue);
        }
    },

    onKeyPress : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onKeyPress) {
            this.props.onKeyPress(event, currentValue);
        }
    }

};

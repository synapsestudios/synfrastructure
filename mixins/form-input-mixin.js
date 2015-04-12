/* jshint globalstrict: true */
'use strict';

module.exports = {

    onFocus : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onFocus) {
            this.props.onFocus(currentValue);
        }
    },

    onBlur : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onBlur) {
            this.props.onBlur(currentValue);
        }
    },

    onChange : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onChange) {
            this.props.onChange(currentValue);
        }
    }

};

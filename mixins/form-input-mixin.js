/* jshint globalstrict: true */
'use strict';

module.exports = {

    onChange : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onChange) {
            this.props.onChange(currentValue);
        }
    }

};

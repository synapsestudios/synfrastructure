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
    },

    onKeyUp : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onKeyUp) {
            this.props.onKeyUp(currentValue, event);
        }
    },

    onKeyDown : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onKeyDown) {
            this.props.onKeyDown(currentValue, event);
        }
    },

    onKeyPress : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onKeyPress) {
            this.props.onKeyPress(currentValue, event);
        }
    }

};

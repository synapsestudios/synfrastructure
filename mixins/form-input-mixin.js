module.exports = {

    onFocus : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onFocus) {
            this.props.onFocus(currentValue, event);
        }
    },

    onBlur : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onBlur) {
            this.props.onBlur(currentValue, event);
        }
    },

    onChange : function(event)
    {
        var currentValue = event.currentTarget.value;

        if (this.props.onChange) {
            this.props.onChange(currentValue, event);
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

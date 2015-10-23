import React             from 'react';
import {Collection as _} from 'lodash';
import FormInputMixin    from '../mixins/form-input-mixin';

let Select = React.createClass({

    displayName : 'SynfrastructureSelect',

    mixins : [FormInputMixin],

    propTypes : {
        id                    : React.PropTypes.string.isRequired,
        disabled              : React.PropTypes.bool,
        options               : React.PropTypes.arrayOf(
            React.PropTypes.shape({
                text     : React.PropTypes.string,
                value    : React.PropTypes.any,
                selected : React.PropTypes.bool
            })
        ).isRequired,
        componentCSSClassName     : React.PropTypes.string,
        componentWrapCSSClassName : React.PropTypes.string,
        customIcon                : React.PropTypes.any,
        value                     : React.PropTypes.any,
        onFocus                   : React.PropTypes.func,
        onBlur                    : React.PropTypes.func,
        onChange                  : React.PropTypes.func,
        onKeyDown                 : React.PropTypes.func,
        onKeyUp                   : React.PropTypes.func,
        onKeyPress                : React.PropTypes.func,
        className                 : React.PropTypes.string,
        tabIndex                  : React.PropTypes.string
    },

    getDefaultProps()
    {
        return {
            componentCSSClassName : 'select',
            customIcon            : null,
            value                 : null,
            onFocus               : null,
            onBlur                : null,
            onChange              : null,
            onKeyUp               : null,
            onKeyDown             : null,
            onKeyPress            : null,
            disabled              : false,
            className             : null
        };
    },

    getSelectedValue()
    {
        let selectedOption;

        if (this.props.value) {
            return this.props.value;
        }

        selectedOption = _.findWhere(this.props.options, {selected : true});

        if (! selectedOption) {
            return null;
        }

        return selectedOption.value;
    },

    renderSelectOptions()
    {
        if (! this.props.options) {
            return null;
        }

        return _.map(this.props.options, (option, index) => {
            return (
                <option
                    value = {option.value}
                    key   = {option.text}
                >
                    {option.text}
                </option>
            );
        });
    },

    renderCustomSelect()
    {
        let classes;

        if (! this.props.customIcon) {
            return this.renderDefaultSelect();
        }

        classes = [
            'select--custom--wrap',
            this.props.componentWrapCSSClassName
        ].join(' ');

        return (
            <div className={classes}>
                {this.renderDefaultSelect()}
                <span className='select--custom--icon'>
                    {this.props.customIcon}
                </span>
            </div>
        );
    },

    renderDefaultSelect()
    {
        let classes,
            customSelect;

        customSelect = (this.props.customIcon) ?
            this.props.componentCSSClassName + '--custom' : null;

        classes = [
            this.props.componentCSSClassName,
            this.props.className,
            customSelect
        ].join(' ');

        return (
            <select
                {...this.props}
                disabled   = {this.props.disabled}
                className  = {classes}
                id         = {this.props.id}
                name       = {this.props.id}
                value      = {this.getSelectedValue()}
                onFocus    = {this.onFocus}
                onBlur     = {this.onBlur}
                onChange   = {this.onChange}
                onKeyUp    = {this.onKeyUp}
                onKeyDown  = {this.onKeyDown}
                onKeyPress = {this.onKeyPress}
                tabIndex   = {this.props.tabIndex}
            >
                {this.renderSelectOptions()}
            </select>
        );
    },

    render()
    {
        return this.renderCustomSelect();
    }

});

export default Select;

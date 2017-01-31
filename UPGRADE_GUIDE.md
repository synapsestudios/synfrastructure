# v7.0.0

This is a rewrite. Proceed at your own risk.

# v6.0.0

## Arbitrary Props
If your app relied on arbitrary props not specified in the Synfrastructure component's `propTypes` to be passed through to the underlying HTML element, you may need to provide this component in your application instead.

## `map()`
If your app supported IE < 9 you may need to polyfill `Array.prototype.map`

# v5.4.0

## Peer dependencies
`react-addons-create-fragment` is now a required peer dependency

# v5.0.0

## Validation Component
The validation component now takes an errors prop and no longer takes a validation prop. You'll need to replace `validation = {{status: 'error', messages: ['message']}}` with the new errors prop `errors = {['message']}`. Errors prop will take a string or an array.

In addition, there are two new props `successMessages` and `warnings` which take strings or arrays of strings. These will display the strings passed in as messages and they can be styled to look appropriate.

## Checkbox
The checkbox component now returns `true` from `onChange` whenever you're checking the box instead of false. If you have any logic that negates the value returned by the checkbox components onChange handler then you should stop negating it. You can trust it now.

Synfrastructure
----

Synfrastructure is a lightweight utility based on [Foundation](https://github.com/zurb/foundation) and [Bourbon](https://github.com/thoughtbot/bourbon) that includes basic React & SCSS components for building UI functionality.

Pairs nicely with our [Frontend Template](https://github.com/synapsestudios/frontend-template).

### Installation

You can install synfrastructure through npm, as such:

```
npm install synfrastructure --save
```

### Using Synfrastructure

#### Using the SASS libraries
For using the complete SASS library, include `app.scss` in your project's settings file. Otherwise, path directly to the partials you wish to include.

To include the React Component base styles, make sure `$include-component-classes` equals `true` in your project's settings file.

### Using the Grid
There are two grids in synfrastructure. The default grid is based off Flexbox. You can use the legacy Foundation-based grid by setting the `$legacy-grid` flag to `true`.

*Syntax*
```
<div class='row'>
    <div class='small-4'>
        <div class='box'>Hello, World</div>
    </div>
    <div class='small-6'>
        <div class='box'>Hello, World</div>
    </div>
    <div class='small-2'>
        <div class='box'>Hello, World</div>
    </div>
</div>
```

*Media Queries*
Media queries are based on min/max width and the variables are prefixed with `$viewport`
```
$viewport-xs
$viewport-sm
$viewport-md
$viewport-lg

@media screen and (max-width: $viewport-sm) {
    //Only shown on screen sizes small and under
}
```

### Using the React Components
Use the components just as you would any other.

ex. `var Alert = require('synfrastructure/alert');`

### Development

Use `npm run build` to compile your JSX components into JS & then use `npm run demo` to build the 'demo' directory and start your local server.



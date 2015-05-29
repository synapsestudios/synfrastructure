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

#### Using the React Components
Use the components just as you would any other.

ex. `var Alert = require('synfrastructure/alert');`

### Development

Use `npm run build` to compile your JSX components into JS & then use `npm run demo` to build the 'demo' directory and start your local server.



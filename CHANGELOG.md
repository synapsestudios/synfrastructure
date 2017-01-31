## [v7.0.0](https://github.com/synapsestudios/synfrastructure/compare/v6.0.0...v7.0.0) - 2017-01-25
- Rewrote Synfrastructure to limit scope to reusable components

## [v6.0.0](https://github.com/synapsestudios/synfrastructure/compare/v5.4.0...v6.0.0) - 2016-08-31
- Removed the ability to arbitrarily pass props with the spread operator since React 15.x throws warnings about unexpected attributes
- Removes jshint linter config in favor of eslint
- Removes lodash and classnames in favor of native JavaScript (may break in IE < 9 unless `Array.prototype.map` is polyfilled)
- Changes default `value` prop from `null` to `''` for React 15.x compatibility

## [v5.4.0](https://github.com/synapsestudios/synfrastructure/compare/v5.3.0...v5.4.0) - 2016-08-29
- Makes `react`, `react-dom` and `react-addons-create-fragment` peerDependencies so that Synfrastructure may be bundled with React 0.14.x or 15.x

## [v5.3.0](https://github.com/synapsestudios/synfrastructure/compare/v5.1.0...v5.3.0) - 2016-04-21
- [BREAKING] Remove legacy Grid
- Remove scss animation utilities

## [v5.1.0](https://github.com/synapsestudios/synfrastructure/compare/v5.0.4...v5.1.0) - 2016-04-11
- Require in only the utilized lodash modules
- Update to React 15
- Package bump

## [v5.0.4](https://github.com/synapsestudios/synfrastructure/compare/v5.0.3...v5.0.4) - 2016-03-31
- Allow disabled on select options

## [v5.0.3](https://github.com/synapsestudios/synfrastructure/compare/v5.0.2...v5.0.3) - 2016-03-22
- Pass events from onBlur, onFocus, onChange (merge from 4.x)

## [v5.0.2](https://github.com/synapsestudios/synfrastructure/compare/v4.1.0...v5.0.2) - 2016-03-04
- Refactor out InputGroup component, see [UPGRADE_GUIDE](https://github.com/synapsestudios/synfrastructure/blob/master/UPGRADE_GUIDE.md)

## [v4.1.1](https://github.com/synapsestudios/synfrastructure/compare/v4.1.0...v4.1.1) - 2016-03-22
- Pass events from onBlur, onFocus, onChange

## [v4.1.0](https://github.com/synapsestudios/synfrastructure/compare/v4.0.4...v4.1.0) - 2016-02-02
- Checkbox handlers report id of element as first param

## [v4.0.2](https://github.com/synapsestudios/synfrastructure/compare/v4.0.1...v4.0.2) - 2016-02-02
- Add missing packages to manifest
- Button component defaults to `<button>` element instead of anchor

## [v4.0.0](https://github.com/synapsestudios/synfrastructure/compare/v3.2.0...v4.0.0) - 2015-10-26
- Added support for React 14
- In exchange, we lost support for React 13. Use the v3.x branch for React 13 support

## [v3.2.0](https://github.com/synapsestudios/synfrastructure/compare/v3.1.4...v3.2.0) - 2015-09-17
- Added radio component
- Added switch component
- Added ability to pass attributes via the spread operator
- Updated componentry to use some ES6 syntax
- Updated packages

## [v3.1.4](https://github.com/synapsestudios/synfrastructure/compare/v3.1.2...v3.1.4) - 2015-07-06
- Added tabIndex to forms
- Textarea component accepts style

## [v3.1.2](https://github.com/synapsestudios/synfrastructure/compare/v3.1.0...v3.1.2) - 2015-07-06
- Added tooltips
- Added basic animations
- Fixed missing comma in index file that was breaking builds

## [v3.1.0](https://github.com/synapsestudios/synfrastructure/compare/v3.0.3...v3.1.0) - 2015-06-26
- Added a new grid based on flexbox, and ability to toggle between new and legacy
- Removed a lot of foundation bloat
- Added media query mixins
- Added checkbox component and styles
- Updated dependancies
- fix custom select classes
- Added modal component and styles

## [v3.0.0](https://github.com/synapsestudios/synfrastructure/compare/v2.0.2...v3.0.0) - 2015-06-8
- Added JSX components and compiled JS files for use
- Added ability to path to SCSS files individually for components
- New build process

## [v2.0.2](https://github.com/synapsestudios/synfrastructure/compare/v2.0.1...v2.0.2) - 2015-05-26
- Add keyboard events to form inputs

## [v2.0.1](https://github.com/synapsestudios/synfrastructure/compare/v2.0.0...v2.0.1) - 2015-05-13
- Inputs can now be disabled

## [v2.0.0](https://github.com/synapsestudios/synfrastructure/compare/v1.0.0...v2.0.0) - 2015-05-05
- Validation changes
- Textarea component
- Many various changes

## [v1.0.0](https://github.com/synapsestudios/synfrastructure/releases/tag/v1.0.0) - 2015-02-24
- Initial release

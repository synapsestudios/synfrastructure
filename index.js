var pkg  = require('./package.json');

exports.libname = pkg.name;
exports.path    = __dirname;
exports.version = pkg.version;

module.exports = {
    Alert  : require('./dist/alert'),
    Button : require('./dist/button'),
    Input  : require('./dist/input'),
    Label  : require('./dist/label')
};

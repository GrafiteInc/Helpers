const ArrayHelper = require('./array');
const StringHelper = require('./strings');

const GrafiteHelper = function (arg) {
    if (typeof arg === 'string') {
        return new StringHelper(arg);
    }

    if (Array.isArray(arg)) {
        return new ArrayHelper(arg);
    }

    if (typeof arg === 'object') {
        return null;
    }
}

module.exports = GrafiteHelper;

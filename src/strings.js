require('./array');

var pluralize = require('pluralize');
var slugify = require('slugify');
var camelCase = require('camelcase');

String.prototype.explode = function (delimiter =" ") {
    return this.valueOf().split(delimiter)
}

String.prototype.after = function (key) {
    let location = this.indexOf(key);
    return this.valueOf().substring(location + key.length);
}

String.prototype.afterLast = function (key) {
    let location = this.lastIndexOf(key);
    return this.valueOf().substring(location + key.length);
}

String.prototype.before = function (key) {
    let location = this.indexOf(key);
    return this.valueOf().substring(0, location);
}

String.prototype.beforeLast = function (key) {
    let location = this.lastIndexOf(key);
    return this.valueOf().substring(0, location);
}

String.prototype.camel = function () {
    return camelCase(this.valueOf());
}

String.prototype.contains = function (str) {
    return this.indexOf(str) > -1;
}

String.prototype.containsAll = function (keys) {
    for (let i = 0; i < keys.length; i++) {
        if (this.indexOf(keys[i]) === -1) {
            return false
        }
    }

    return true;
}

String.prototype.endsWith = function (key) {
    let location = this.indexOf(key);

    if (location + key.length === this.length) {
        return true;
    }

    return false;
}

String.prototype.finish = function (value) {
    let location = this.lastIndexOf(value);

    if (location + value.length === this.length) {
        return this.valueOf();
    }

    return this.valueOf() + value;
}

String.prototype.is = function (str) {
    return this.valueOf() === str;
}

String.prototype.kebab = function () {
    return slugify(this.valueOf());
}

String.prototype.limit = function (limit) {
    let limitedString = this.substring(0, limit);
    limitedString = limitedString.trimEnd();

    if (this.length > limit) {
        limitedString = `${limitedString}...`;
    }

    return limitedString;
}

String.prototype.plural = function (numberOf =2) {
    let str = this.valueOf();
    return pluralize(str, numberOf);
}

String.prototype.replaceArray = function (key, values) {
    let words = this.valueOf().explode();
    var regex = new RegExp(key.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g");
    let count = (this.match(regex) || []).length;
    let valueIndex = 0;

    if (count != values.length) {
        throw new Error('Not enough values to replace all');
    }

    for (let i = 0; i < words.length; i++) {
        if (words[i] === key) {
            words[i] = values[valueIndex];
            valueIndex++;
        }
    }

    return words.implode();
}

String.prototype.replaceFirst = function (key, value) {
    let location = this.indexOf(key);

    return this.valueOf().substring(0, location)
        + value
        + this.valueOf().substring(location + key.length);
}

String.prototype.replaceLast = function (key, value) {
    let location = this.lastIndexOf(key);

    return this.valueOf().substring(0, location)
        + value
        + this.valueOf().substring(location + key.length);
}

String.prototype.singular = function (numberOf =1) {
    let str = this.valueOf();
    return pluralize(str, numberOf);
}

String.prototype.slug = function (separator ='-') {
    let str = this.valueOf();
    return slugify(str, separator);
}

String.prototype.snake = function () {
    return slugify(this.valueOf().toLowerCase(), '_');
}

String.prototype.start = function (value) {
    if (this.indexOf(value) === 0) {
        return this.valueOf();
    }

    return value + this.valueOf();
}

String.prototype.startsWith = function (key) {
    return this.indexOf(key) === 0;
}

String.prototype.title = function () {
    let string = this.valueOf().explode();

    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
    }

    return string.implode();
}

String.prototype.words = function (limit) {
    let snippet = [];
    let words = this.valueOf().explode();

    if (words.length > limit) {
        for (let i = 0; i < limit; i++) {
            snippet.push(words[i]);
        }

        return `${snippet.implode()}...`;
    }

    return words.implode();
}

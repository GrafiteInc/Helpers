// require('./array');

var pluralize = require('pluralize');
var slugify = require('slugify');
var camelCase = require('camelcase');

const StringHelper = function (str) {
    return {

        explode (delimiter =" ") {
            return str.valueOf().split(delimiter)
        },

        after (key) {
            let location = str.indexOf(key);
            return str.valueOf().substring(location + key.length);
        },

        afterLast (key) {
            let location = str.lastIndexOf(key);
            return str.valueOf().substring(location + key.length);
        },

        before (key) {
            let location = str.indexOf(key);
            return str.valueOf().substring(0, location);
        },

        beforeLast (key) {
            let location = str.lastIndexOf(key);
            return str.valueOf().substring(0, location);
        },

        camel () {
            return camelCase(str.valueOf());
        },

        contains (string) {
            return str.indexOf(string) > -1;
        },

        containsAll (keys) {
            for (let i = 0; i < keys.length; i++) {
                if (str.indexOf(keys[i]) === -1) {
                    return false
                }
            }

            return true;
        },

        endsWith (key) {
            let location = str.indexOf(key);

            if (location + key.length === str.length) {
                return true;
            }

            return false;
        },

        finish (value) {
            let location = str.lastIndexOf(value);

            if (location + value.length === str.length) {
                return str.valueOf();
            }

            return str.valueOf() + value;
        },

        is (string) {
            return str.valueOf() === string;
        },

        kebab () {
            return slugify(str.valueOf());
        },

        limit (limit) {
            let limitedString = str.substring(0, limit);
            limitedString = limitedString.trimEnd();

            if (str.length > limit) {
                limitedString = `${limitedString}...`;
            }

            return limitedString;
        },

        plural (numberOf =2) {
            let string = str.valueOf();
            return pluralize(string, numberOf);
        },

        replaceArray (key, values) {
            let words = str.valueOf().split(" ");
            var regex = new RegExp(key.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "g");
            let count = (str.match(regex) || []).length;
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

            return words.join(' ');
        },

        replaceFirst (key, value) {
            let location = str.indexOf(key);

            return str.valueOf().substring(0, location)
                + value
                + str.valueOf().substring(location + key.length);
        },

        replaceLast (key, value) {
            let location = str.lastIndexOf(key);

            return str.valueOf().substring(0, location)
                + value
                + str.valueOf().substring(location + key.length);
        },

        singular (numberOf =1) {
            let string = str.valueOf();
            return pluralize(string, numberOf);
        },

        slug (separator ='-') {
            let string = str.valueOf();
            return slugify(string, separator);
        },

        snake () {
            return slugify(str.valueOf().toLowerCase(), '_');
        },

        start (value) {
            if (str.indexOf(value) === 0) {
                return str.valueOf();
            }

            return value + str.valueOf();
        },

        startsWith (key) {
            return str.indexOf(key) === 0;
        },

        title () {
            let string = str.valueOf().split(" ");

            for (let i = 0; i < string.length; i++) {
                string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
            }

            return string.join(" ");
        },

        words (limit) {
            let snippet = [];
            let words = str.valueOf().split(" ");

            if (words.length > limit) {
                for (let i = 0; i < limit; i++) {
                    snippet.push(words[i]);
                }

                return `${snippet.join(" ")}...`;
            }

            return words.join(" ");
        }
    }
}

module.exports = StringHelper;

var root = require('window-or-global');

root.dd = function() {
    for (var i = 0, len = arguments.length; i < len; i++) {
        console.log(JSON.parse(JSON.stringify(arguments[i])));
    }
}

require('../src/debug.js');
var assert = require('chai').assert;

describe('Grafite Debug Helper Test', function () {
    it('should console log an item', function () {
        let _result = [];

        let _item = {
            foo: 'bar',
            location: {
                city: 'Toronto'
            }
        };

        let _item2 = {
            foo: 'why',
            location: {
                city: 'Los Angeles'
            }
        };

        console.log = function() {
            for (var i = 0, len = arguments.length; i < len; i++) {
                _result.push(arguments[i]);
            }
        };

        dd(_item, _item2);

        assert.deepEqual(_result, [_item, _item2]);
    });
});

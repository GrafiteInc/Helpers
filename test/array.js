const helper = require('../src/index.js');

var assert = require('chai').assert;

describe('Grafite Array Helper Test', function () {
    it('should implode an array', function () {
        let sentence = helper(["This", "is", "cool"]).implode();

        assert.equal(sentence, "This is cool");
    });

    it('should get first item in an array', function () {
        let sentence = helper(["This", "is", "cool"]).first();

        assert.equal(sentence, "This");
    });

    it('should get the last value of an array', function () {
        let sentence = helper(["This", "is", "cool"]).last();
        assert.equal(sentence, "cool");
    });

    it('should remove the item from the array', function () {
        assert.deepEqual(helper(["This", "is", "cool"]).remove("is"), ["This", "cool"]);
    });
});

const helper = require('../src/index.js');

var assert = require('chai').assert;

describe('Grafite String Helper Test', function () {
    it('should give the rest of the string after the indicator', function () {
        assert.equal(helper("Hello world").after('lo'), ' world');
    });

    it('should give the rest of the string after the last occrance of the indicator', function () {
        assert.equal(helper('App\\Http\\Controllers\\Controller').afterLast("\\"), 'Controller');
        assert.equal(helper('This is a simple test of testing code').afterLast("test"), 'ing code');
    });

    it('should give the contents before the indicator', function () {
        assert.equal(helper("this is my name").before('my name'), 'this is ');
    });

    it('should give the contents before the last occrance of the indicator', function () {
        assert.equal(helper("this is my name").beforeLast('is'), 'this ');
    });

    it('should provide a camelcase string', function () {
        assert.equal(helper("this thing is real").camel(), 'thisThingIsReal');
    });

    it('should return if the string contains another string', function () {
        assert.isTrue(helper("Hello").contains("lo"));
    });

    it('should return if the string contains all the other strings', function () {
        assert.isTrue(helper("This is my name").containsAll(['my', 'name']));
        assert.isFalse(helper("This is my name").containsAll(['my', 'Matt']));
    });

    it('should return true if a string ends with another string', function () {
        assert.isTrue(helper("test this idea").endsWith(' idea'));
    });

     it('should return a string with a value added to the end', function () {
        assert.equal(helper("test this").finish(' idea'), 'test this idea');
        assert.equal(helper("test this idea").finish(' idea'), 'test this idea');
        assert.equal(helper("test this").finish('\\'), 'test this\\');
    });

    it('should return a kebab form of the string', function () {
        assert.equal(helper("test this idea").kebab(), 'test-this-idea');
    });

    it('should return limit the characters in a string', function () {
        assert.equal(helper("Hello").limit(4).length, 7);
    });

    it('should return whether the string is a match', function () {
        assert.isTrue(helper("Hello").is("Hello"));
    });

    it('should return a plural of the string', function () {
        assert.equal(helper("test").plural(), 'tests');
    });

    it('should replace all', function () {
        let str = helper('The event will take place between ? and ?').replaceArray('?', ['8:30', '9:30']);
        assert.equal(str, 'The event will take place between 8:30 and 9:30');

        assert.throws(
            function () {
                helper('The event will take place between ? and ?').replaceArray('?', ['8:30']);
            },
            Error,
            'Not enough values to replace all'
        );
    });

    it('should return replace a value in a string', function () {
        let str = helper('the quick brown fox jumps over the lazy dog').replaceFirst('the', 'a');
        assert.equal(str, 'a quick brown fox jumps over the lazy dog');
    });

    it('should return replace a value in a string', function () {
        let str = helper('the quick brown fox jumps over the lazy dog').replaceLast('the', 'a');
        assert.equal(str, 'the quick brown fox jumps over a lazy dog');
    });

    it('should return a singular form of the string', function () {
        assert.equal(helper("tests").singular(), 'test');
    });

    it('should return a slug form of the string', function () {
        assert.equal(helper("test this idea").slug(), 'test-this-idea');
    });

    it('should return a snake form of the string', function () {
        assert.equal(helper("test this idea").snake(), 'test_this_idea');
    });

    it('should return a string with a new string at the beginning', function () {
        assert.equal(helper("idea").start('Awesome '), 'Awesome idea');
    });

    it('should return true if a string starts with a string', function () {
        assert.isTrue(helper("test this idea").startsWith('test'));
    });

    it('should return a title form of the string', function () {
        assert.equal(helper("test this idea").title(), 'Test This Idea');
    });

    it('should return a snippet of a sentence', function () {
        assert.equal(helper("test this idea where there are many words").words(3), 'test this idea...');
    });
});
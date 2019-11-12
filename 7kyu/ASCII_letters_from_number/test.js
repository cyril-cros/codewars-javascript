let assert = require('chai').assert;
let testedFunction = require('./index');

describe('Function to be tested: ASCII letters from SINGLE number', function() {
        it('should return A if number = 65 ', function() {
            assert.equal(testedFunction("65"), "A");
        });
});


describe('Function to be tested: ASCII letters from MULTIPLE numbers', function() {
    it('should return ABC if number = 656667 ', function() {
        assert.equal(testedFunction("656667"), "ABC");
    });
    it('should return CAT if number = 676584 ', function() {
        assert.equal(testedFunction("676584"), "CAT");
    });
    it('should return I LIKE UPPERCASE if number = 73327673756932858080698267658369 ', function() {
        assert.equal(testedFunction("73327673756932858080698267658369"), "I LIKE UPPERCASE");
    });
});

describe('Function to be tested: ERROR Cases', function() {
    it('ERROR - Input is NULL', function() {
        assert.equal(testedFunction(null), "ERROR - Input is null");
    });
    it('ERROR - Input outside LOWER boundary', function() {
        assert.equal(testedFunction("65877659"), "ERROR - Input contains digits couple OUTSIDE ASCII upper case boundaries");
    });
    it('ERROR - Input outside UPPER boundary', function() {
        assert.equal(testedFunction("65877691"), "ERROR - Input contains digits couple OUTSIDE ASCII upper case boundaries");
    });
    it('ERROR - Input length in not PAIR', function() {
        assert.equal(testedFunction("65877"), "ERROR - Input length in not PAIR or doesn't contain exclusively DIGIT");
    });
    it('ERROR - Doesn\'t contain exclusively DIGIT ', function() {
        assert.equal(testedFunction("65877F"), "ERROR - Input length in not PAIR or doesn't contain exclusively DIGIT");
    });
});







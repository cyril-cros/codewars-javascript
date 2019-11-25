let assert = require('chai').assert;
let testedFunction = require('./index');

describe('Function to be tested: HashTag Generator from SINGLE word', function() {
    it('should return #Codewars for Codewars ', function() {
        assert.equal(testedFunction("Codewars"), "#Codewars");
    });
    it('should return camelCase #Codewars for codewars ', function() {
        assert.equal(testedFunction("codewars"), "#Codewars");
    });
});

describe('Function to be tested: HashTag Generator from MULTIPLE words', function() {
    it('should return #DoWeHaveAHashtag for Do We have A Hashtag ', function() {
        assert.equal(testedFunction("Do We have A Hashtag"), "#DoWeHaveAHashtag");
    });
    it('should return camelCase #DoWeHaveAHashtag for do we have a hashtag ', function() {
        assert.equal(testedFunction("do we have a hashtag"), "#DoWeHaveAHashtag");
    });
});


describe('Function to be tested: HashTag Generator for long word', function() {
    it('should return #Aaaaaaa.....a for a.repeat 139 times ', function() {
        assert.equal(testedFunction("a".repeat(139)), "#A" + "a".repeat(138));
    });

    it('should return #CodeWars for code     wars ', function() {
        assert.equal(testedFunction("code" + " ".repeat(140) + "wars"), "#CodeWars");
    });

});


describe('Function to be tested: ERROR Cases', function() {
    it('ERROR - Input is EMPTY', function() {
        assert.equal(testedFunction(""), false);
    });

    it('ERROR - Input is EMPTY with space chars', function() {
        assert.equal(testedFunction("             "), false);
    });

    it('ERROR - Input is too long (str already = 140 char)', function() {
        assert.equal(testedFunction("a".repeat(140)), false);
    });

    it('ERROR - Input is too long (str already > 140 char)', function() {
        assert.equal(testedFunction("a".repeat(200)), false);
    });
});

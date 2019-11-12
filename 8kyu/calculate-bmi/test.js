let assert = require('chai').assert;
let testedFunction = require('./index');

describe('Function to be tested: Calculate BMI', function() {
    it('should return Underweight ', function() {
        assert.equal(testedFunction(10, 2), "Underweight");
    });
    it('should return Normal ', function() {
        assert.equal(testedFunction(80, 1.80), "Normal");
    });
    it('should return Overweight ', function() {
        assert.equal(testedFunction(90, 1.79), "Overweight");
    });
    it('should return Obese ', function() {
        assert.equal(testedFunction(120, 1.60), "Obese");
    });
});



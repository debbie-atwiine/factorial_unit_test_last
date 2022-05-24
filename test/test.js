const assert = require('chai').assert;
const factorial = require('../factorial');

describe('Tests on the factorial function', () => {

    it('should get factorial of 0 as 1', () => {
        assert.equal(factorial(0), 1)
    });

    it('should get factorial of 1 as 1', () => {
        assert.equal(factorial(1), 1)
    });

    it('should get factorial of 2 as 2', () => {
        assert.equal(factorial(2), 2)
    });

    it('should get factorial of 3 as 6', () => {
        assert.equal(factorial(3), 6)
    });

    it('should get factorial of 5 as 120', () => {
        assert.equal(factorial(5), 120)
    });

});
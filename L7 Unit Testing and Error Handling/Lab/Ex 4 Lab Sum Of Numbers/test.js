const expect = require('chai').expect
const sum = require('./sumOfNumbers2');

describe('sum', () => {
    it('works with array of numbers', () => {
        expect(sum([1,2,3])).to.equal(6);
    });
    it('works with one number', () => {
        expect(sum([0])).to.equal(0);
    });
   // it('works with a negative number');
}) ;
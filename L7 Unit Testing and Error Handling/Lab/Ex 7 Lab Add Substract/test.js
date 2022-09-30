const {expect} = require('chai');
const createCalculator = require('./addSubstract2');

describe('Testing', () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator()
    });
    it('adds a single number to sum', () => {
        calc.add(1);
        expect(calc.get()).to.equal(1);
    });
    it('subtracts single number form sum', () => {
        calc.subtract(1);
        expect(calc.get()).to.equal(-1);
    });
    it('adds a multiple numbers to sum', () => {
        calc.add(1);
        calc.add(2);
        expect(calc.get()).to.equal(3);
    });
    it('subtracts a multiple numbers to sum', () => {
        calc.subtract(1);
        calc.subtract(2);
        expect(calc.get()).to.equal(-3);
    });
    it('adds a string value to sum', () => {
        calc.add('1');
        expect(calc.get()).to.equal(1);
    });
    it('adds a float value to sum', () => {
        calc.add(1.1);
        expect(calc.get()).to.equal(1.1);
    });

});
let expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('should return undefined for non-number input', () => {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        });
        it('should return correct result for pos integer param', () => {
            expect(mathEnforcer.addFive(10)).to.equal(15);
        });
        it('should return correct result for neg integer param', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('should return correct result for floating point param', () => {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
    });
    describe('subtractTen', function () {
        it('should return undefined for non-number input', () => {
            expect(mathEnforcer.subtractTen('test')).to.equal(undefined);
        });
        it('should return correct result for pos integer param', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        });
        it('should return correct result for neg integer param', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
        it('should return correct result for floating point param', () => {
            expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01)
        });
    });
    describe('sum', function () {
        it('should return undefined for invalid first param', () => {
            expect(mathEnforcer.sum('5',5)).to.equal(undefined);
        });
        it('should return undefined for invalid second param', () => {
            expect(mathEnforcer.sum(5,'5')).to.equal(undefined);
        });
        it('should return correct result for integer params', () => {
            expect(mathEnforcer.sum(5, -4)).to.equal(1);
        });
        it('should return correct result for floating point params', () => {
            expect(mathEnforcer.sum(2.7,3.4)).to.be.closeTo(6.1,0.01);
        });
    });
});
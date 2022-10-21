const expect = require('chai').expect

const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

describe('testNumbers', function() {
    describe('sumNumber', function() {
        it('returns undefined if parameters are invalid', () => {
            expect(testNumbers.sumNumbers(1,'1')).to.equal(undefined);
            expect(testNumbers.sumNumbers('1','1')).to.equal(undefined);
            expect(testNumbers.sumNumbers('1',1)).to.equal(undefined);
        });
        it('returns sum if valid', () => {
            expect(testNumbers.sumNumbers(1,1)).to.equal('2.00');
            expect(testNumbers.sumNumbers(1,100)).to.equal('101.00');
            expect(testNumbers.sumNumbers(-1,5)).to.equal('4.00');
            expect(testNumbers.sumNumbers(-1,-5)).to.equal('-6.00');
            expect(testNumbers.sumNumbers(1,-5)).to.equal('-4.00');
            expect(testNumbers.sumNumbers(1,1.1)).to.equal('2.10');
        });
        describe('numberChecker', function() {
            it('checks if number is even', () => {
                expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
                expect(testNumbers.numberChecker(8)).to.equal('The number is even!');
                expect(testNumbers.numberChecker('8')).to.equal('The number is even!');

            });
            it('checks if number is odd', () => {
                expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
                expect(testNumbers.numberChecker(131)).to.equal('The number is odd!');
                expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
            });
            it('it returns error if not a number', () => {
                expect(() => testNumbers.numberChecker('a')).to.throw('The input is not a number!');
            });
        });
        describe('averageSumArray', function() {
            it('returns average sum', () => {
                expect(testNumbers.averageSumArray([1,2,3])).to.equal(2);
                expect(testNumbers.averageSumArray([0,2,3])).to.be.closeTo(1.66, 1);
            });
          });
    });
});




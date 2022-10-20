const expect = require('chai').expect


const flowerShop = {
    calcPriceOfFlowers(flower, price, quantity) {
        if (typeof flower != 'string' || !Number.isInteger(price) || !Number.isInteger(quantity)) {
            throw new Error('Invalid input!');
        } else {
            let result = price * quantity;
            return `You need $${result.toFixed(2)} to buy ${flower}!`;
        }
    },
    checkFlowersAvailable(flower, gardenArr) {
        if (gardenArr.indexOf(flower) >= 0) {
            return `The ${flower} are available!`;
        } else {
            return `The ${flower} are sold! You need to purchase more!`;
        }
    },
    sellFlowers(gardenArr, space) {
        let shop = [];
        let i = 0;
        if (!Array.isArray(gardenArr) || !Number.isInteger(space) || space < 0 || space >= gardenArr.length) {
            throw new Error('Invalid input!');
        } else {
            while (gardenArr.length > i) {
                if (i != space) {
                    shop.push(gardenArr[i]);
                }
                i++
            }
        }
        return shop.join(' / ');
    }
}

describe('flowerShop', function() {
    describe('calcPriceOfFlowers', function() {
        it('returns total price', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 10, 2)).to.equal('You need $20.00 to buy Rose!');
        });
        it('Invalid input!', () => {
            expect(() => flowerShop.calcPriceOfFlowers('f','f','f')).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('f','f',1)).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers('f',1,'f')).to.throw();
            expect(() => flowerShop.calcPriceOfFlowers(1,1,1)).to.throw();
        });
    });
    describe('checkFlowersAvailable', function() {
       it('returns availability status', () => {
        expect(flowerShop.checkFlowersAvailable('Rose',['Rose','Lilly', 'Tulip'])).to.equal('The Rose are available!');
        expect(flowerShop.checkFlowersAvailable('Lilly',['Rose','Lilly', 'Tulip'])).to.equal('The Lilly are available!');
       });
       it('returns warning if flower is sold out', () => {
        expect(flowerShop.checkFlowersAvailable('Rose', ['Lilly', 'Tulip'])).to.equal('The Rose are sold! You need to purchase more!');
       });
    });
    describe('sellFlowers', function() {
        it('returns changed array', () => {
            expect(flowerShop.sellFlowers(['Lilly', 'Tulip','Rose'], 2)).to.equal('Lilly / Tulip');
            expect(flowerShop.sellFlowers(['Lilly', 'Tulip','Rose'], 0)).to.equal('Tulip / Rose');
        });
        it('Invalid input!', () => {
            expect(() => flowerShop.sellFlowers('f','f')).to.throw();
            expect(() => flowerShop.sellFlowers(1,1)).to.throw();
            expect(() => flowerShop.sellFlowers(['Rose', 'Lilly'],'f')).to.throw();
            expect(() => flowerShop.sellFlowers(['Rose', 'Lilly'],4)).to.throw();
        });
       
    });
});
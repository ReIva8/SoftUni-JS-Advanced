const expect = require('chai').expect

const rentCar = {
    searchCar(shop, model) {
        let findModel = [];
        if (Array.isArray(shop) && typeof model == 'string') {
            for (let i = 0; i < shop.length; i++) {
                if (model == shop[i]) {
                    findModel.push(shop[i]);
                }
            }
            if (findModel.length !== 0) {
                return `There is ${findModel.length} car of model ${model} in the catalog!`;
            } else {
                throw new Error('There are no such models in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    calculatePriceOfCar(model, days) {
        let catalogue = {
            Volkswagen: 20,
            Audi: 36,
            Toyota: 40,
            BMW: 45,
            Mercedes: 50
        };

        if (typeof model == 'string' && Number.isInteger(days)) {
            if (catalogue.hasOwnProperty(model)) {
                let cost = catalogue[model] * days;
                return `You choose ${model} and it will cost $${cost}!`
            } else {
                throw new Error('No such model in the catalog!')
            }
        } else {
            throw new Error('Invalid input!')
        }
    },
    checkBudget(costPerDay, days, budget) {
        if (!Number.isInteger(costPerDay) || !Number.isInteger(days) || !Number.isInteger(budget)) {
            throw new Error('Invalid input!');
        } else {
            let cost = costPerDay * days;
            if (cost <= budget) {
                return `You rent a car!`
            } else {
                return 'You need a bigger budget!'
            }
        }
    }
}

describe('rentCar', function(){
    describe('searchCar', function() {
        it('Invalid input', () => {
            expect(() => rentCar.searchCar('1','1')).to.throw();
            expect(() => rentCar.searchCar([q],[w])).to.throw();
            expect(() => rentCar.searchCar(1,[w])).to.throw();
        });
        it('returns match of car model', () => {
            expect(rentCar.searchCar(['BMW', 'Audi', 'VW', 'VW'], 'VW')).to.equal('There is 2 car of model VW in the catalog!');
            expect(rentCar.searchCar(['BMW', 'Audi', 'VW', 'BMW', 'BMW', 'VW'], 'BMW')).to.equal('There is 3 car of model BMW in the catalog!');
        });
        it('returns error if no matches are found', () => {
            expect(() => rentCar.searchCar(['BMW', 'VW'], 'Citroen')).to.throw(Error, 'There are no such models in the catalog!');
        });
    });
    describe('calculatePriceOfCar', function() {
        it('Invalid input', () => {
            expect(() => rentCar.calculatePriceOfCar('1','1')).to.throw();
            expect(() => rentCar.calculatePriceOfCar(1,1)).to.throw();
            expect(() => rentCar.calculatePriceOfCar(1,'1')).to.throw();
        });
        it('returns cost per days if car is available', ()=> {
            expect(rentCar.calculatePriceOfCar('BMW', 4)).to.equal('You choose BMW and it will cost $180!');
            expect(rentCar.calculatePriceOfCar('Volkswagen', 4)).to.equal('You choose Volkswagen and it will cost $80!');
            expect(rentCar.calculatePriceOfCar('Audi', 4)).to.equal('You choose Audi and it will cost $144!');
            expect(rentCar.calculatePriceOfCar('Toyota', 4)).to.equal('You choose Toyota and it will cost $160!');
            expect(rentCar.calculatePriceOfCar('Mercedes', 4)).to.equal('You choose Mercedes and it will cost $200!');

        });
        it('returns error if model is not found', () => {
            expect(() => rentCar.calculatePriceOfCar('Toshiba', 4)).to.throw(Error, 'No such model in the catalog!');
        });
    });
    describe('checkBudget', function() {
        expect(() => rentCar.checkBudget('1','1',1)).to.throw();
        expect(() => rentCar.checkBudget('1',1,1)).to.throw();
        expect(() => rentCar.checkBudget(1,1,'1')).to.throw();
        expect(() => rentCar.checkBudget(1,'1','1')).to.throw();
    });
    it('returns confirmation if cost is within budget', () => {
        expect(rentCar.checkBudget(1,2,5)).to.equal('You rent a car!');
        expect(rentCar.checkBudget(1,2,2)).to.equal('You rent a car!');
    });
    it('returns message if cost is over budget', () => {
        expect(rentCar.checkBudget(2,2,3)).to.equal('You need a bigger budget!');
    });
});
const expect = require('chai').expect

const cinema = {
    showMovies: function(movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function(projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function(firstPlace, secondPlace) {

        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 || firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};

describe('cinema', function() {
    describe('showMovies', function() {
        it('announces lack of movies', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it('returns available movies', () => {
            expect(cinema.showMovies(['Batman', 'LOTR'])).to.equal('Batman, LOTR');
            expect(cinema.showMovies(['Batman'])).to.equal('Batman');
        });
    }); 
    describe('ticketPrice', function() {
        it('returns price by projection type', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
        it('notifies projection type is wrong', () => {
            expect(() => cinema.ticketPrice('VIP')).to.throw('Invalid projection type.');
        });
    });
    describe('swapSeatsInHall', function() {
        it('returns failure notification', () => {
            expect(cinema.swapSeatsInHall(1,0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0,1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0,0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,1.5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.5,1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1,2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,-2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21,2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,'2')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('1',2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('returns success notification', () => {
            expect(cinema.swapSeatsInHall(4,5)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(4,20)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20,5)).to.equal('Successful change of seats in the hall.');
        });
    });
});
const expect = require('chai').expect

const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function(booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};

describe('library', function() {
    describe('calcPriceOfBook', function() {
        it('returns price of book', () => {
            expect(library.calcPriceOfBook('The Woods', 2000)).to.equal('Price of The Woods is 20.00');
            expect(library.calcPriceOfBook('Harry Potter', 1981)).to.equal('Price of Harry Potter is 20.00');
        });
        it('returns discounted price', () => {
            expect(library.calcPriceOfBook('Dracula', 1896)).to.equal('Price of Dracula is 10.00');
            expect(library.calcPriceOfBook('The spy', 1980)).to.equal('Price of The spy is 10.00');
        });
        it('Invalid input', () => {
            expect(() => library.calcPriceOfBook('Book', '1654')).to.throw();
            expect(() => library.calcPriceOfBook('Book', 1985.1)).to.throw();
            expect(() => library.calcPriceOfBook(['Book'], 1985)).to.throw();
            expect(() => library.calcPriceOfBook(2000, 1985)).to.throw();
        });
    });
    describe('findBook', function() {
        it('returns error if empty array', () => {
            expect(() => library.findBook([], 2000)).to.throw('No books currently available');
        });
        it('returns found book', () => {
            expect(library.findBook(['Troy', 'Dracula', 'LOTR'], 'LOTR')).to.equal('We found the book you want.');
            expect(library.findBook(['Troy', 'Dracula', 'LOTR'], 'Dracula')).to.equal('We found the book you want.');
        });
        it('notifies no book was found', () => {
            expect(library.findBook(['Troy', 'Dracula', 'LOTR'], 'Harry Potter')).to.equal('The book you are looking for is not here!');
        });
    });
    describe('arrangeTheBooks', function() {
        it('Invalid input', () => {
            expect(() => library.arrangeTheBooks(1.1)).to.throw();
            expect(() => library.arrangeTheBooks(-1)).to.throw();
            expect(() => library.arrangeTheBooks('1')).to.throw();
        });
        it('distributes books successfully on shelf', () => {
            expect(library.arrangeTheBooks(20)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(0)).to.equal('Great job, the books are arranged.');

        });
        it('notifies more shelves are needed', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(500)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });

});
const expect = require('chai').expect

const bookSelection = {
  isGenreSuitable(genre, age) {
    if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    } else {
      return `Those books are suitable`;
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let result = budget - price;

    if (result < 0) {
      return "You don't have enough money";
    } else {
      return `Book bought. You have ${result}$ left`;
    }
  },
  suitableTitles(array, wantedGenre) {
    let resultArr = [];

    if (!Array.isArray(array) || typeof wantedGenre !== "string") {
      throw new Error("Invalid input");
    }
    array.map((obj) => {
      if (obj.genre === wantedGenre) {
        resultArr.push(obj.title);
      }
    });
    return resultArr;
  },
};

describe('bookSelection', function() {
  describe('isGenreSuitable', function() {
    it('returns text if genre is Thriller', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
    });
    it('returns text if genre is Thriller', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 5)).to.equal('Books with Thriller genre are not suitable for kids at 5 age');
    });
    it('returns text if genre is Horror', () => {
      expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
    });
    it('returns text if genre is Horror', () => {
      expect(bookSelection.isGenreSuitable('Horror', 5)).to.equal('Books with Horror genre are not suitable for kids at 5 age');
    });
    it('returns text if genre is Thriller and age is right', () => {
      expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
    });
    it('returns text if genre is Horror and age is right', () => {
      expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable');
    });
    it('returns text if genre and age is right', () => {
      expect(bookSelection.isGenreSuitable('h', 3)).to.equal('Those books are suitable');
    });
    it('returns text if genre and age is right', () => {
      expect(bookSelection.isGenreSuitable('h', 20)).to.equal('Those books are suitable');
    });
  });
  describe('isItAffordable', function () {
    it('returns warning if book is over budget', () => {
      expect(bookSelection.isItAffordable(10,5)).to.equal("You don't have enough money");
    });
    it('returns approval if book is bought', () => {
      expect(bookSelection.isItAffordable(5,10)).to.equal("Book bought. You have 5$ left");
    });
    it('returns approval if book is bought', () => {
      expect(bookSelection.isItAffordable(10,10)).to.equal("Book bought. You have 0$ left");
    });
    it('Invalid input', () => {
      expect(() => bookSelection.isItAffordable('5',10)).to.throw();
      expect(() => bookSelection.isItAffordable('5','10')).to.throw();
      expect(() => bookSelection.isItAffordable(5,'10')).to.throw();
    });
  });
  describe('suitableTitles', function () {
    it('Invalid input', () => {
      expect(() => bookSelection.suitableTitles([],10)).to.throw();
      expect(() => bookSelection.suitableTitles('5','10')).to.throw();
    });
    it('returns 1 match', () => {
      expect(bookSelection.suitableTitles([{
        title: 'Wings',
        genre: 'action'
      }], 'action')).to.deep.equal(['Wings']);
    });
    it('returns multiple matches', () => {
      expect(bookSelection.suitableTitles([{
        title: 'Wings',
        genre: 'action'
      },
      {
        title: 'Bait',
        genre: 'action'
      },
      {
        title: 'Revolver',
        genre: 'mystery'
      }], 'action')).to.deep.equal(['Wings', 'Bait']);
    });
    it('returns no match', () => {
      expect(bookSelection.suitableTitles([{
        title: 'Revolver',
        genre: 'mystery'
      }], 'action')).to.deep.equal([]);
    })
  });

});
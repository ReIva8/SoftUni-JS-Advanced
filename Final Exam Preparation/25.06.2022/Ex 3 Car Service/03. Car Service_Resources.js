const expect = require('chai').expect

const carService = {
  isItExpensive(issue) {
    if (issue === "Engine" || issue === "Transmission") {
      return `The issue with the car is more severe and it will cost more money`;
    } else {
      return `The overall price will be a bit cheaper`;
    }
  },
  discount(numberOfParts, totalPrice) {
    if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
      throw new Error("Invalid input");
    }

    let discountPercentage = 0;

    if (numberOfParts > 2 && numberOfParts <= 7) {
      discountPercentage = 15;
    } else if (numberOfParts > 7) {
      discountPercentage = 30;
    }

    let result = (discountPercentage / 100) * totalPrice;

    if (numberOfParts <= 2) {
      return "You cannot apply a discount";
    } else {
      return `Discount applied! You saved ${result}$`;
    }
  },
  partsToBuy(partsCatalog, neededParts) {
    let totalSum = 0;

    if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
      throw new Error("Invalid input");
    }
    neededParts.forEach((neededPart) => {
      partsCatalog.map((obj) => {
        if (obj.part === neededPart) {
          totalSum += obj.price;
        }
      });
    });

    return totalSum;
  },
};

describe('carService', function() {
  describe('isItExpensive', function(){
    it('returns predefined text if input is Engine', () =>{
      expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
    });
    it('returns predefined text if input is Transmission', () =>{
      expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
    });
    it('returns predefined text if input is different', () =>{
      expect(carService.isItExpensive('Text')).to.equal('The overall price will be a bit cheaper');
    });
  });
  describe('discount', function(){
    it('returns 15% discount', () =>{
      expect(carService.discount(3, 100)).to.be.equal('Discount applied! You saved 15$');
    });
    it('returns 15% discount2', () =>{
      expect(carService.discount(7, 100)).to.be.equal('Discount applied! You saved 15$');
    });
    it('returns 30% discount2', () =>{
      expect(carService.discount(8, 100)).to.be.equal('Discount applied! You saved 30$');
    });
    it('Invalid input', () => {
      expect(() => carService.discount('a', 5)).to.throw();
      expect(() => carService.discount('a', 'b')).to.throw();
      expect(() => carService.discount(1, 'b')).to.throw();
    })
  });
  describe('partsToBuy', function(){
    it('checks if array1 is empty', () =>{
      expect(carService.partsToBuy([],[1])).to.be.equal(0);
    });
    it('Invalid input', () => {
      expect( () => carService.partsToBuy('a', [])).to.throw();
      expect( () => carService.partsToBuy('a', 'aa')).to.throw();
      expect( () => carService.partsToBuy([], 'a')).to.throw();
    });
    
       
  });
});
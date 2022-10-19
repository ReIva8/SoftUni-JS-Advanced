class CarDealership {
    constructor(name){
        this.name = name,
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    };
 
    addCar(model, horsepower, price, mileage){
        if(typeof(model) == 'string' && model != ''
        && typeof(horsepower) == 'number' && horsepower >= 0
        && typeof(price) == 'number' && price >= 0
        && typeof(mileage) == 'number' && mileage >= 0){
            this.availableCars.push({
                model,
                horsepower,
                price,
                mileage
            });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
 
        } else {
            throw Error('Invalid input!');
        }
    };
 
    sellCar(model, desiredMileage){
        let soldPrice = 0;
        let foundCarIndex = this.availableCars.findIndex(c => c.model == model);
        if(foundCarIndex == -1){
            throw Error(`${model} was not found!`);
        } 
        //compare mileage
        if(this.availableCars[foundCarIndex].mileage > desiredMileage){
            if(this.availableCars[foundCarIndex].mileage - desiredMileage <= 40000){
                soldPrice = this.availableCars[foundCarIndex].price - (this.availableCars[foundCarIndex].price * 0.05);
            } else if(this.availableCars[foundCarIndex].mileage - desiredMileage > 40000){
                soldPrice = this.availableCars[foundCarIndex].price - (this.availableCars[foundCarIndex].price * 0.10);
            }
        } else {
            soldPrice = this.availableCars[foundCarIndex].price;
        }
        
        //add car to sold and add sold price to totalIncome
        this.soldCars.push(
            {
                model:this.availableCars[foundCarIndex].model,
                horsepower:this.availableCars[foundCarIndex].horsepower,
                soldPrice: soldPrice
            }
        );
        this.totalIncome+= soldPrice;
 
        //remove car from available
        this.availableCars.slice(foundCarIndex, 1);
 
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    };
 
    currentCar(){
        if(this.availableCars.length == 0){
            return 'There are no available cars';
        } else {
            let result = ['-Available cars:'];
        for (const car of this.availableCars) {
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
        };
        return result.join('\n');
        }
 
    };
 
    salesReport(criteria){
        let sortedArr;
        if(criteria == 'horsepower'){
            sortedArr = this.soldCars.sort((a,b) => b.horsepower - a.horsepower);
        } else if(criteria == 'model'){
            sortedArr = this.soldCars.sort((a,b) => (a.model).localeCompare(b.model));
        } else {
            throw Error('Invalid criteria!');
        }
        //print
        let result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`, `-${this.soldCars.length} cars sold:`];
        for (const car of sortedArr) {
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
        }
        return result.join('\n');
    };
 
 
}
let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('', 120, 4900, 240000));

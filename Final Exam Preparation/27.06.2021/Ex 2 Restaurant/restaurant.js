class Restaurant {
    constructor(budgetMoney, menu, stockProducts, history) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(products) {
        products.forEach(element => {
            let [productName, productQuantity, productTotalPrice] = element.split(' ');
            if (productTotalPrice > this.budgetMoney) {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
            else {
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = Number(productQuantity);
                }
                else {
                    this.stockProducts[productName] += Number(productQuantity);
                }
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                this.budgetMoney -= productTotalPrice;
            }
        });
        return this.history.join('\n')
    }
    addToMenu(meal, neededProducts, price) {
        price = Number(price);
        if(!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                products,
                price,
            };
            let numberOfMeals = Object.keys(menu).length;
            if(numberOfMeals  === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the {meal} we have {the number of all meals in the menu} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    };
    showTheMenu() {
        if(Object.keys(menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }
        let result = [];
        Object.keys(this.menu).forEach((e) => result.push(`${key} - $ ${this.menu[key].price}`));
        return result.join('\n');
    };
    makeTheOrder(meal) {
        if(!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        };
        let mealAvailable = this.menu[meal];
        let productsS = mealAvailable.products;
        let allProductsAvailable = true;
        for (let i = 0; i < productsS.length; i++) {
            let productName = Object.keys(productsS[i])[0];        
            let productQuantity = productsS[i][productName];
            if(!Object.keys(this.stockProducts).includes(productName) || this.stockProducts[productName] < productQuantity) {
                allProductsAvailable = false;
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }    
        }
        if(allProductsAvailable) {
            for (let j = 0; j < productsS.length; j++) {
            let productName = Object.keys(productsS[j])[0];        
            let productQuantity = productsS[j][productName];
            this.stockProducts.productName -= productQuantity
            }
            let currentMeal = this.menu[meal];
            let price = currentMeal.price;
            this.budgetMoney += price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`

        }
    }

}
let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

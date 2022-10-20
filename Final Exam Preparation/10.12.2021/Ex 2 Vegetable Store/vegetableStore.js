class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables(vegetables) {
        let addedTypes = [];
        for (let i = 0; i < vegetables.length; i++) {
            let type = vegetables[i].split(' ')[0];
            let quantity = Number(vegetables[i].split(' ')[1]);
            let price = Number(vegetables[i].split(' ')[2]);

            if (this.availableProducts.some(e => e.type == type)) {
                let product = this.availableProducts.find(e => e.type == type);
                product.quantity += quantity;
                if (product.price < price) { product.price = price; }
                if (!addedTypes.includes(type)) { addedTypes.push(type) }
            }
            else {
                this.availableProducts.push({ type, quantity, price });
                if (!addedTypes.includes(type)) { addedTypes.push(type) }
            }
        }

        return `Successfully added ${addedTypes.join(', ')}`
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (let i = 0; i < selectedProducts.length; i++) {
            let type = selectedProducts[i].split(" ")[0];
            let quantity = Number(selectedProducts[i].split(" ")[1])
            if (this.availableProducts.some(e => e.type == type)) {
                let product = this.availableProducts.find(e => e.type == type);
                if (product.quantity < quantity) { throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`) }
                totalPrice += quantity * product.price;
                product.quantity -= quantity;
            }
            else { throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`) }
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        if (!this.availableProducts.some(e => e.type == type)) { 
            throw new Error(`${type} is not available in the store.`) }
        let product = this.availableProducts.find(e => e.type == type);
        if (product.quantity < quantity) {
             product.quantity = 0; return `The entire quantity of the ${type} has been removed.` }
        else { product.quantity -= quantity; return `Some quantity of the ${type} has been removed.` }
    }

    revision (){
        let output=`Available vegetables:\n`;
        this.availableProducts.sort((a,b)=>a.price-b.price);
        this.availableProducts.forEach(e=>output+=`${e.type}-${e.quantity}-$${e.price}\n`);
        output+=`The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return output;
    }


}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

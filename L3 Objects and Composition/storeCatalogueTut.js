function storeCatalogueTut(array) {
    let obj = {};
    //there will be an object that contains letters, to make the letter list, and it will have an embedded object with the products
    //{letter A: {Appricot: 20.4, Apple 1,25}}

    for(const line of array) {
        let [product, price] = line.split(' : ');
        price = Number(price);
        let letter = product[0];

        if(!obj.hasOwnProperty(letter)) {
            obj[letter] = {}; //empty {} because there wont be duplicates
        }
        obj[letter][product] = price;
    }
    let sortedLetters = Object.keys(obj).sort((a,b) => a.localeCompare(b));

    for(const letter of sortedLetters) {
        console.log(letter);
        let sortedProducts = Object.keys(obj[letter]).sort((a,b) => a.localeCompare(b));

        for(const product of sortedProducts) {
            console.log(`  ${product}: ${obj[letter][product]}`);
        }
    }
}
storeCatalogueTut(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']


);
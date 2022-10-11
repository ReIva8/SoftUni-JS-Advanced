function lowerPricesInCitiesTut(array) {
  let obj = {};
  //key: {product -> {town, price}}
  for (let index = 0; index < array.length; index++) {
    let text = array[index];
    let productInfo = text.split(" | ");
    let town = productInfo[0];
    let product = productInfo[1];
    let price = Number(productInfo[2]);
    if (!obj.hasOwnProperty(product)) {
      //check if obj already has that product
      obj[product] = { town, price };
    } else {
      if (price < obj[product].price) {
        //checks the price related to the product
        obj[product] = { town, price };
      }
    }
  }
  let productNames = Object.keys(obj);
  for (let index = 0; index < productNames.length; index++) {
    let productName = productNames[index];
    console.log(`${productName} -> ${obj[productName].price} (${obj[productName].town})`)    
  }
}
lowerPricesInCitiesTut([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);

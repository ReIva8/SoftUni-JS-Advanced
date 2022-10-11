function calorieObjectTut(array) {
  let obj = {};
  for (let index = 0; index < array.length; index += 2) {
    //+=2 to take every second index
    let product = array[index];
    let calories = array[index + 1];
    obj[product] = Number(calories);
  }
  console.log(obj);
}
calorieObjectTut(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);

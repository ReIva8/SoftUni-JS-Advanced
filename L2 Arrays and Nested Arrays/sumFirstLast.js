function sumFirstLast(array) {
    let firstElement = array.shift();
    let lastElement = array.pop();
    let sum = +firstElement + +lastElement;
    console.log(sum);
}
sumFirstLast(['20', '30', '40']);
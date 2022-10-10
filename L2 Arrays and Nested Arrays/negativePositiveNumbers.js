function negativePositive(array) {
let result = [];
for (let index = 0; index < array.length; index++) {
    if(array[index] >= 0) {
        result.push(array[index]);
    } else {
        result.unshift(array[index]);
    }
   
}
console.log(result.join('\n'));
}
negativePositive([7, -2, 8, 9]);
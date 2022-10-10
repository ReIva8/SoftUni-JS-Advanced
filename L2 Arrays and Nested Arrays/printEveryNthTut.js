function printEveryNthTut(array, n) {
    /* let result = [];
    for (let index = 0; index < array.length; index+=n) {
       result.push(array[index]);
    }
    return result */
    return array.filter((element, index) => index % n === 0)
}
console.log(printEveryNthTut(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));
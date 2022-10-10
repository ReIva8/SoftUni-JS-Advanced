function extractSubsetOfArrayTut(array) {
//extracts only those numbers that form a non-decreasing subset
    let result = [];
    let biggestN = array[0];
    for (let index = 0; index < array.length; index++) {
        let currentN = array[index];
        if(currentN >= biggestN) {
            result.push(currentN);
            biggestN = currentN;
        }
    }
    return result;
}
console.log(extractSubsetOfArrayTut([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));
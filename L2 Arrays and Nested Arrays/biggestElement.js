function biggestElement(matrix) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    let maxNumRow;
    for (let row = 0; row < matrix.length; row++) {
        maxNumRow = Math.max(...matrix[row]);
        if (maxNum < maxNumRow) {
            maxNum = maxNumRow;
        }
    }
 
    return maxNum;
}

console.log(biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]));

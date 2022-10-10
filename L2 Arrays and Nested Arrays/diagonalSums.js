function diagonalSums(matrix) {
let diagonalLenghth = matrix.length;
let sumDiagonal1 = 0;
let sumDiagonal2 = 0;
for (let row = 0; row < diagonalLenghth; row++) {
sumDiagonal1 += Number(matrix[row][row]); // row = 00, then 11, then 22 and thus it takes the diagonal
sumDiagonal2 += Number(matrix[row][diagonalLenghth - row - 1]);

}
return `${sumDiagonal1} ${sumDiagonal2}`;
}
console.log(diagonalSums([[20, 40],
              [10, 60]]
   ));
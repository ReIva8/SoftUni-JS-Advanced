function magicMatrices(matrix) {
//if the sums of the cells of every row and every column are equal. 
    isMagical = true;
    for (let index = 0; index < matrix.length - 1; index++) { //goes through the rows
        let sumRowOne = matrix[index].reduce((a,b) => a + b, 0); //takes a and b and sums them in place of the 0 
        let sumRowTwo = matrix[index+1].reduce((a,b) => a + b, 0);
        let sumColOne = 0;
        let sumColTwo = 0;

        for (let j = 0; j < matrix.length; j++) {
                sumColOne += matrix[index][j];
                sumColTwo += matrix[index+1][j];
        }
        if(sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            isMagical = false;
        }
    }
    return isMagical;
}
console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));
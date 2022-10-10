function orbitTut(array){
    let width = array[0];
    let height = array[1];
    let starRow = array[2];
    let starCol = array[3];
    let matrix = [];

    for (let index = 0; index < width; index++) {
        matrix.push([]);
    }
    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
           matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) +1;   
        }
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}
orbitTut([4, 4, 0, 0]);
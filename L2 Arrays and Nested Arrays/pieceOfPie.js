/* function pieceOfPie(pies, start, end) {
    const startIndex = pies.indexOf(start);
    const endIndex = pies.indexOf(end);
    return pies.slice(startIndex, endIndex+1)
} */

function pieceOfPie(array, targetFlavor1, targetFlavor2) {
    let targetFl1Index1 = array.indexOf(targetFlavor1);
    let targetFl1Index2 = array.indexOf(targetFlavor2);
    return array.slice(targetFl1Index1, targetFl1Index2+1);

}
console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));
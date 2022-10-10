function processOddPositions (array) {
   /*  let reversedArray = [];
    for (let index = 0; index < array.length; index++) {
        if (index % 2 !== 0) {
            let doubled = array[index] * 2;
            reversedArray.push(doubled);
        }
    }
    console.log(reversedArray.reverse()); */
    //var 2
    const odd = array.filter((x,i) => i %2);
    const doubled = odd.map(x => x *2);
    doubled.reverse();
    console.log(doubled.join(' '));
    
}
processOddPositions([10, 15, 20, 25]);
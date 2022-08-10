function circleArea(input) {
    let check = typeof(input);
    if(check === 'number') {
        let area = Math.PI * Math.pow(input, 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${check}.`);
    }
}
circleArea(5);
function greatestDiviser(x,y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        let i = y;
        y = x % y;
        x = i;
    }
    return x;
}
console.log(greatestDiviser(15, 5));
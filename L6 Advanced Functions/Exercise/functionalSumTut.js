function add(n) {
    const inner = function(a) {
        n+=a; 
        //when the function is called, a will be 1, then it will be 6 etc
        return inner;
    };
    inner.toString = function() {
        return n;
    }
    return inner;

}

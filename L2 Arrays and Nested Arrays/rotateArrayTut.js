function rotateArrayTut(array,n) {
    for (let index = 0; index < n; index++) {
        //remove last element
        //add to start        
        array.unshift(array.pop());
    }        
    console.log(array.join(' '));
}
rotateArrayTut(['1', 
'2', 
'3', 
'4'], 
2
);
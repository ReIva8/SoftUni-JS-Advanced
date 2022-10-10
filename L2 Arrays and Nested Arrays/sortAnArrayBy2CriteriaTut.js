function sortAnArrayBy2CriteriaTut(array){
//given array of strings, by a length in ascending order
//and by alphabetical value in ascending order as second criteria
//comparison should be case-insensitive.
    array.sort(twoCriteriaSort);
    return array.join('\n');
    function twoCriteriaSort(current, next) {
        if(current.length === next.length) {
            return current.localeCompare(next);
        }
        return current.length - next.length; //will return ascending order
    }
        
}
console.log(sortAnArrayBy2CriteriaTut(['alpha', 
'beta', 
'gamma']
));
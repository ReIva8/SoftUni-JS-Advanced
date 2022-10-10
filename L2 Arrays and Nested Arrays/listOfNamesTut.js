function listOfNamesTut(array) {
    array.sort((a,b) => a.localeCompare(b));
    for (let index = 0; index < array.length; index++) {
        console.log(`${index +1}.${array[index]}`)        
    }

}
listOfNamesTut(["John", "Bob", "Christina", "Ema"]);
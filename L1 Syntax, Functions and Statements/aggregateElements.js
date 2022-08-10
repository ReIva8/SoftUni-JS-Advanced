function aggregateElements(array) {
    //sum(ai) - calculates the sum of all elements from the input array
    //Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
    //Concat(ai) - concatenates the string representations of all elements from the array
    let sum = 0;
    let inverseSum = 0;
    let concatenated = 0;
    for (let index = 0; index < array.length; index++) { 
        sum += array[index];   
        inverseSum += (1/array[index]);    
    }
    console.log(sum)
    console.log(inverseSum);
    concatenated = array.join('');
        console.log(concatenated)

    }

aggregateElements([1, 2, 3]);
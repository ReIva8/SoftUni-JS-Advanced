function lastKNumbers(n,k) {
  // create array to add result to, containing 1
  let result = [1];
  // repeat n-times, take last k elemnt from result array
  for (let index = 0; index < n-1; index++) {
    let lastK = result.slice(-k);
    // sum elements, addsum to array
    let sum = 0;
    for (let element of lastK) {
      sum += element;
    }
    result.push(sum);
  }
  return result;

}
console.log(lastKNumbers(6, 3));
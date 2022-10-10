function sortingNumbersTut(array) {
  //first element is the smallest one, the second is the biggest one
  let result = [];
  array.sort((a, b) => b - a);
  while (array.length !== 0) {
    result.push(array.pop()); //takes last element from array
    result.push(array.shift());
  }
  return result;
}
console.log(sortingNumbersTut([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

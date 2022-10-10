function biggerHalf(array) {
  array.sort((a, b) => a - b); //sorted in ascending order
  const result = [];
  for (let i = Math.floor(array.length / 2); i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
console.log(biggerHalf([4, 7, 2, 5]));

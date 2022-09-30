//Write a function to sum a range of numeric elements from an array.
//array elements may not be of type Number
//Implement error handling:
// 1.if the first element is not an array, return NaN;
// 2. If the start index is less than zero, consider its value to be a zero
// 3. If the end index is outside the bounds of the array, assume it points to the last index of the array
// As output, return the sum.
function subSum2(arr, startIndex, endIndex) {
  let sum = 0;
  if (Array.isArray(arr) === false) {
    return NaN;
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (endIndex > arr.length - 1) {
    endIndex = arr.length - 1;
  }
  for (let index = startIndex; index <= endIndex; index++) {
        sum += Number(arr[index]);
  }

  return sum;
}
console.log(subSum2([10, 20, 30, 40, 50, 60], 3, 300));

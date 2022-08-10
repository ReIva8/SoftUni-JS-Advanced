function sumOfNumbers(str1, str2) {
//prints the sum of all numbers from n to m.
let n1 = Number(str1);
let n2 = Number(str2);
let sum = 0;

for (let i = n1; i <= n2; i++) {
    sum += i;
    
}
console.log(sum);

}
sumOfNumbers('1', '5' );
function stringLength(string1, string2, string3) {
let len1 = string1.length;
let len2 = string2.length;
let len3 = string3.length;
let sum = len1 + len2 + len3;
console.log(sum);
let avg = Math.floor(sum/3);
console.log(avg);

}
stringLength('chocolate', 'ice cream', 'cake');
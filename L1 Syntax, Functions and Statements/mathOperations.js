function mathOperations(n1, n2, operator) {
//The string may be one of the following: '+', '-', '*', '/', '%', '**'.
let result = 0;
switch(operator) {
    case '+': result = n1 + n2;  break;
    case '-': result = n1 - n2;  break;
    case '*': result = n1 * n2;  break;
    case '/': result = n1 / n2;  break;
    case '%': result = n1 % n2;  break;
    case '**': result = Math.pow(n1, n2);  break;
}
console.log(result);

}
mathOperations(5, 6, '+');
//to subtract the values from these text fields and display the result in the div named "result".

function subtract() {
    let firstElement = document.getElementById('firstNumber').value;
    let secondElement = document.getElementById('secondNumber').value;
    let resultElement = document.getElementById('result');
    resultElement.textContent = Number(firstElement) - Number(secondElement);
}
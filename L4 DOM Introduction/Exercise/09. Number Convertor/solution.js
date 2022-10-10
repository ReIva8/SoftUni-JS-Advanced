//that converts a decimal number to binary and hexadecimal
//When you convert to hexadecimal it must be upper case.
//the "To" select menu by default is empty
function solve() {
   let selectToElement = document.getElementById('selectMenuTo');
   let optionHexadecimal = document.createElement('option');
   optionHexadecimal.value = 'hexadecimal';
   optionHexadecimal.textContent = 'Hexadecimal';
   
   let optionBinary = document.createElement('option');
   optionBinary.value = 'binary';
   optionBinary.textContent = 'Binary';
   selectToElement.appendChild(optionHexadecimal);
   selectToElement.appendChild(optionBinary);

   let buttonElement = document.getElementsByTagName('button')[0];
   buttonElement.addEventListener('click', () => {
        let result = document.getElementById('result');
        let inputElement = document.getElementById('input');
        let inputNumber = Number(inputElement.value);

        if(selectToElement.value == 'binary') {
            result.value = inputNumber.toString(2);
        } else if (selectToElement.value = 'hexadecimal') {
            result.value = inputNumber.toString(16).toUpperCase();
        }
   });
}


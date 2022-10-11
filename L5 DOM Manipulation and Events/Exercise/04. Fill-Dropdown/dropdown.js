//take values from input fields with ids "newItemText" and "newItemValue
// create and append an <option> to the <select> with id "menu".

function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    let select = document.getElementById('menu');

    let optionElement = document.createElement('option');
    optionElement.textContent = newItemText.value;
    optionElement.value = newItemValue.value;

    select.appendChild(optionElement);
    newItemText.value = '';
    newItemValue.value = '';
}
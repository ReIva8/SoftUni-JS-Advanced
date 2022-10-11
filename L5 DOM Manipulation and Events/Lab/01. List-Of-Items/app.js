//reads the text inside an input field and appends the specified text to a list inside an HTML page.
function addItem() {
    const content = document.getElementById('newItemText').value;
    const liElement = document.createElement('li');
    liElement.textContent = content;
    const ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);
    document.getElementById('newItemText').value = '';

}
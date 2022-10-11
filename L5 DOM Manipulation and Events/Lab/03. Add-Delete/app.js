//Extend the previous problem to display a [Delete] link after each list item. 
//Clicking it should delete the item with no confirmation.
function addItem() {
    const toAdd = document.getElementById('newItemText');
    const ul = document.getElementById('items');
    let newElement = document.createElement('li');
    newElement.textContent = toAdd.value;

    const button = document.createElement('a');
    button.textContent = '[Delete]';
    button.href = '#';
    button.addEventListener('click', removeElement);
    newElement.appendChild(button);
    ul.appendChild(newElement);

    function removeElement(ev) {
        ev.target.parentNode.remove();
    }
}
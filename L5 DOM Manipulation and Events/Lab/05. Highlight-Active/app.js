//highlights the currently active section of a document
//Set the class of the div that contains the currently focused input field to "focused". 


function focused() {
    Array.from(document.querySelectorAll('input')).forEach(i => {
        i.addEventListener('focus', onFocus);
        i.addEventListener('blur', onBlur);
    });

    function onFocus(ev) {
        ev.target.parentElement.className = 'focused';
    }
    function onBlur(ev) {
        ev.target.parentElement.className = '';
    }
}
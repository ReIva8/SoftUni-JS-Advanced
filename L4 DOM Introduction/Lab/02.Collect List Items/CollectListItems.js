//scans a given HTML list and appends all collected list items’ text to a textarea on the same page 
//when the user clicks on a button.
//program should instead modify the DOM of the given HTML document
function extractText() {
    const items = Array.from(document.querySelectorAll('li'));
    const result = (items.map(e => e.textContent).join('\n'));
    document.getElementById('result').value = result;
}
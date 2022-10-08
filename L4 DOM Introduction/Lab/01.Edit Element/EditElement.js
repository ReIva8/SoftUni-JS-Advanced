// /The first parameter is a reference to an HTML element
//the other two parameters are string–match and replacer.
// /You have to replace all occurrences of the match inside the text content of the given element with a replacer
function editElement(element, match, replacer) {
    const text = element.textContent;
    const pattern = new RegExp(match, 'g');
    const result = text.replace(pattern, replacer);
    element.textContent = result;
}
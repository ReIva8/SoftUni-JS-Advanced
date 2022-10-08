//when executed, extracts all parenthesized text from a target paragraph by given element ID
//The result is a string, joined by "; " (semicolon, space).


function extract(content) {
const text = document.getElementById(content).textContent;
let result = '';

const pattern = /\((.+?)\)/g;
let match = pattern.exec(text);
while(match !== null) {
    result += match[1] + ', ';
    match = pattern.exec(text);
}
return result;
}
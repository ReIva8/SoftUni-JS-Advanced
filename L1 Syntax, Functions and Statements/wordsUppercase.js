function wordsUppercase(data) {
    let pattern = /\w+/g
    let match = pattern.exec(data);
let result = [];

while(match !== null) {
    result.push(match[0]);
    match = pattern.exec(data);
}
console.log(result.join(', ').toUpperCase());
}

wordsUppercase('Hi, how are you?');
function solve(input) {
    let result = [];

    let functions = {
        add: text => result.push(text),
        remove: text => (result = result.filter(a => a !== text)),
        print: () => console.log(result.join(','))
    }

    input.forEach(text => {
        let [command, value] = text.split(' ');
        functions[command](value);
    })
}
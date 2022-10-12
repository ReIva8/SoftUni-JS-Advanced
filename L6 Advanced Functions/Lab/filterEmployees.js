function solve(data, input) {
    criteria = input.split('-')[0];
    value = input.split('-')[1];
    let counter = 0;
    JSON.parse(data).filter(e => e[criteria] == value).forEach(e => {
        console.log(`${counter}. ${e['first_name']} ${e['last_name']} - ${e['email']}`);
        counter++;
    });

}
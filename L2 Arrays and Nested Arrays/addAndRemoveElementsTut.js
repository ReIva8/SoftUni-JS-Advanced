function addAndRemoveElementsTut(array) {
    let result = [];
    let number = 0;
    for (let index = 0; index < array.length; index++) {
        number++;
        let command = array[index];
        if(command === 'add') {
            result.push(number);
        } else if (command === 'remove') {
            result.pop(number);
        }
    }
    if(result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));

    }
}
addAndRemoveElementsTut(['add', 
'add', 
'add', 
'add']
);